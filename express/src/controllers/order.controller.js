const db = require("../database");

exports.select = async(req, res) => {
  const orders = await db.order.findAll({
    where: {
      questioner: req.query.nickname
    },
    include: [
      {
        model: db.resource,
        where: {order: db.order.col('id')},
        required: false 
      },
      {
        model: db.msg,
        where:{order: db.order.col('id')},
        required: false
      },
      {
        model: db.replyer
      }
    ]
  });

  res.json(orders);
}

exports.create = async(req, res) => {
  const order = await db.order.create({
    content: req.body.content,
    questioner: req.body.questioner,
    replyer: req.body.replyer,
    price: req.body.price,
    private: req.body.private
  });

  res.json(order);
}