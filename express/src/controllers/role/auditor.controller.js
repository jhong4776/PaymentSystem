const db = require("../database");

module.exports.update_password = async (req, res) => {
  const auditor = await db.auditor.findByPk(req.body.nickname);

  if(auditor === null)
    res.json(null);

  auditor.password_hash = await argon2.hash(req.body.password, { type: argon2.argon2id })
  await auditor.save();

  res.json(auditor);
}

exports.login = async(req, res) => {
  const auditor = await db.auditor.findByPk(req.query.nickname);

  if (auditor === null || await argon2.verify(auditor.password_hash, req.query.password) === false)
  // Login failed.
      res.json(null);
  else
      res.json(auditor);
};

exports.create = async(req, res) => {
  let auditor = await db.auditor.findByPk(req.body.nickname)

  if(auditor)
    res.json(null);

  const hash = await argon2.hash(req.body.password, {
    type: argon2.argon2id
  });
  await auditor.create({
    nickname: req.body.nickname,
    password_hash: hash,
  });

  res.json(auditor);
}