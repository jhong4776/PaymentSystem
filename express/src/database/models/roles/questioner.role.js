module.exports = (db, DataTypes) =>
  db.sequelize.define("quetioner", {
    nickname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    password_hash: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING(32),
    },
    email: {
      type: DataTypes.STRING(32),
    },
  }, {
    timestamps: false
  })