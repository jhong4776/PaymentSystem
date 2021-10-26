module.exports = (express, app) => {
  const order = require("../controllers/role/order.controller.js");
  const router = express.Router();

  // Select order of questioner.
  router.get("/select", order.select);

  // Create order.
  router.post("/create", order.create);

  // Add routes to server.
  app.use("/api/replyer", router);
};
