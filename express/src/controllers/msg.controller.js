const db = require("../database");

exports.create = async(req, res) => {
    const msg = await db.msg.create({
        content: req.body.content,
        content_type: req.body.content_type,
        order_id: req.body.order_id,
        from: req.body.from
    });

    res.json(msg);
}