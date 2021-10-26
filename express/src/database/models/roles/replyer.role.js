module.exports = (db, DataTypes) =>
  db.sequelize.define("replyer", {
    nickname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    password_hash: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    introdution: {
      type: DataTypes.STRING(256),
      allowNull: false,
    },
    direction: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false
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