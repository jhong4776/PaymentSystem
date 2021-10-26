module.exports = (express, app) => {
  const replyer = require("../controllers/role/replyer.controller.js");
  const router = express.Router();

  // Replyer login.
  router.get("/login", replyer.login);

  // Update replyer.
  router.post("/update", replyer.update);

  // Add routes to server.
  app.use("/api/replyer", router);
};
