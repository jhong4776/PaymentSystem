const db = require("../database");

module.exports.update = async (req, res) => {
  const replyer_update = req.body;
  const replyer = await db.replyer.findByPk(req.body.nickname);

  if(replyer === null)
    res.json(null);

  for(let key in replyer_update) {
    if(key !== "nickname" && key !== "password_hash")
      replyer[key] = replyer_update[key];
  }
  await replyer.save();

  res.json(replyer);
}

exports.login = async(req, res) => {
  const replyer = await db.replyer.findByPk(req.query.nickname);

  if (replyer === null || await argon2.verify(replyer.password_hash, req.query.password) === false)
  // Login failed.
      res.json(null);
  else
      res.json(replyer);
};