const express = require("express");
const cors = require("cors");
const db = require("./src/database");
const multer = require("multer");
let upload =multer({dest:"./imgs"});
const fs = require("fs");

// Database will be synced in the background.
db.sync();

const app = express();

// Parse requests of content-type - application/json.
app.use(express.json());

// Add CORS suport.
app.use(cors());

//图片静态服务器
app.use("/imgs",express.static("imgs"));

//上传图片
app.post("/upload",upload.single('avatar'),(req,res)=>{
  let file = req.file;
  let imgurl = "./imgs/"+file.originalname;

  fs.rename(file.path, imgurl, (err)=>{
    console.log("图片保存失败", err);
  }); 
  imgurl = "http://localhost:4000/imgs/"+file.originalname;

  res.json(imgurl);
})

// Add routes.
require("./src/routes/role/admin.routes.js")(express, app);
require("./src/routes/role/auditor.routes.js")(express, app);
require("./src/routes/role/questioner.routes.js")(express, app);
require("./src/routes/role/replyer.routes.js")(express, app);
require("./src/routes/msg.routes.js")(express, app);
require("./src/routes/order.routes.js")(express, app);

// Set port, listen for requests.
const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});
