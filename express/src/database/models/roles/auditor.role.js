module.exports = (db, DataTypes) =>
  db.sequelize.define("auditor", {
    nickname: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    password_hash: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    // phone: {
    //   type: DataTypes.STRING(32),
    //   allowNull: true,
    // },
    // email: {
    //   type: DataTypes.STRING(32),
    //   allowNull: true,
    // },
  }, {
    timestamps: false
  })