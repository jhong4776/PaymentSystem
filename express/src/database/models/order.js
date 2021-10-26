module.exports = (db, DataTypes) =>
  db.sequelize.define("order", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true
    },
    questioner: {
      type: DataTypes.STRING(32),
      allowNull: false,
      reference:{
        model: db.questioner,
        key: "nickname"
      }
    },
    replyer: {
      type: DataTypes.STRING(256),
      allowNull: false,
      reference:{
        model: db.replyer,
        key: "nickname"
      }
    },
    content: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    private: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    comment: {
      type: DataTypes.STRING(256),
    },
    score: {
      type: DataTypes.INTEGER,
    }
  }, {
    timestamps: false
  })