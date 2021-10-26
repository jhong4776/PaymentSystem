const db = require("../database");

module.exports.update = async (req, res) => {
  const quetioner_update = req.body;
  const quetioner = await db.quetioner.findByPk(req.body.nickname);

  if(quetioner === null)
    res.json(null);

  for(let key in quetioner_update) {
    if(key !== "nickname" && key !== "password_hash")
      quetioner[key] = quetioner_update[key];
  }
  await quetioner.save();

  res.json(quetioner);
}

exports.login = async(req, res) => {
  const quetioner = await db.quetioner.findByPk(req.query.nickname);

  if (quetioner === null || await argon2.verify(quetioner.password_hash, req.query.password) === false)
  // Login failed.
      res.json(null);
  else
      res.json(quetioner);
};