"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.hasMany(models.Transactions, {
        foreignKey: "book_code",
        as: "transactions",
      });
    }
  }
  Books.init(
    {
      code: DataTypes.STRING,
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      stock: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
