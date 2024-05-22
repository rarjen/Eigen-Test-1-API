"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Transactions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Transactions.belongsTo(models.Members, {
        foreignKey: "member_code",
        as: "member",
      });
      Transactions.belongsTo(models.Books, {
        foreignKey: "book_code",
        as: "book",
      });
    }
  }
  Transactions.init(
    {
      member_code: DataTypes.STRING,
      book_code: DataTypes.STRING,
      status_penalty: DataTypes.INTEGER,
      date_borrowed: DataTypes.DATE,
      date_returned: DataTypes.DATE,
      status_pinjam: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Transactions",
    }
  );
  return Transactions;
};
