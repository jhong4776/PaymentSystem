module.exports = (db, DataTypes) =>
  db.sequelize.define("msg", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    content_type: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    content: {
      type: DataTypes.STRING(256),
      allowNull: false
    },
    order: {
      type: DataTypes.UUID,
      allowNull: false,
      reference:{
        model: db.order,
        key: "id"
      }
    },
    from: {
      type: DataTypes.ENUM("questioner", "replyer"),
      allowNull: false
    }
  }, {
    timestamps: false
  })