const db = require("../database");

module.exports.update = async (req, res) => {
  const admin_update = req.body;
  const admin = await db.admin.findByPk(req.body.nickname);

  if(admin === null)
    res.json(null);

  for(let key in admin_update) {
    if(key !== "nickname" && key !== "password_hash")
      admin[key] = admin_update[key];
  }
  await admin.save();

  res.json(admin);
}

exports.login = async(req, res) => {
  const admin = await db.admin.findByPk(req.query.nickname);

  if (admin === null || await argon2.verify(admin.password_hash, req.query.password) === false)
  // Login failed.
      res.json(null);
  else
      res.json(admin);
};