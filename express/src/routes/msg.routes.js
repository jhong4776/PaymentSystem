module.exports = (express, app) => {
  const msg = require("../controllers/role/msg.controller.js");
  const router = express.Router();

  // Create msg.
  router.post("/create", msg.update);

  // Add routes to server.
  app.use("/api/msg", router);
};
