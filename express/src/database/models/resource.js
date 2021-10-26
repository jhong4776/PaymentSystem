module.exports = (db, DataTypes) =>
  db.sequelize.define("resource", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    order: {
      type: DataTypes.UUID,
      allowNull: false,
      reference:{
        model: db.order,
        key: "id"
      }
    },
    content: {
      type: DataTypes.STRING(256),
      allowNull: false,
    }
  }, {
    timestamps: false
  })