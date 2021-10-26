module.exports = (db, DataTypes) =>
  db.sequelize.define("admin", {
    nickname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    password_hash: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    max_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    min_price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    order_wait_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    first_answer_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_answer_time: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    timestamps: false
  })