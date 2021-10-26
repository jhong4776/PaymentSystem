module.exports = (express, app) => {
  const auditor = require("../controllers/role/auditor.controller.js");
  const router = express.Router();

  // Auditor login.
  router.get("/login", auditor.login);

  // Update auditor password or parameters.
  router.post("/update_password", auditor.update_password);

  //Create auditor
  router.post("/create", auditor.create);

  // Add routes to server.
  app.use("/api/auditor", router);
};
