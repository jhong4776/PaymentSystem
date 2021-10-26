module.exports = (express, app) => {
  const admin = require("../controllers/role/admin.controller.js");
  const router = express.Router();

  // Admin login.
  router.get("/login", admin.login);

  // Admin password or parameters update.
  router.post("/update", admin.update);

  // Add routes to server.
  app.use("/api/admin", router);
};
