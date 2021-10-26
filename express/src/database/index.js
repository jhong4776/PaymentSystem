const { Sequelize, DataTypes } = require("sequelize");
const argon2 = require("argon2");
const config = require("./config.js");

const db = {
    Op: Sequelize.Op
};

db.sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
    host: config.HOST,
    port: config.PORT,
    dialect: config.DIALECT
});

// Include models.
db.admin = require("./models/role/admin.role.js")(db, DataTypes);
db.auditor = require("./models/role/auditor.role.js")(db, DataTypes);
db.questioner = require("./models/role/questioner.role.js")(db, DataTypes);
db.replyer = require("./models/role/replyer.role.js")(db, DataTypes);


db.sync = async() => {
    // 开发环境下使用, { alter: true} 可能会导致破坏性后果
    await db.sequelize.sync({ alter: true });
    
    // // 生产环境下使用
    // await db.sequelize.sync();
};

//初始化管理员
const initial_admin = async() => {
    const admin = await db.admin.findByPk("admin");

    if(admin === null)
        await db.admin.create({
            nickname: "admin",
            password_hash: await argon2.hash("admin", { type: argon2.argon2id }),
            max_price: 100,
            min_price: 10,
            order_wait_time: 24 * 3600 * 1000,
            first_answer_time: 24 * 3600 * 1000,
            max_answer_time: 10
        });
}
initial_admin();

module.exports = db;