module.exports = (express, app) => {
  const questioner = require("../controllers/role/questioner.controller.js");
  const router = express.Router();

  // Questioner login.
  router.get("/login", questioner.login);

  // Update questioner.
  router.post("/update", questioner.update);

  // Add routes to server.
  app.use("/api/questioner", router);
};
