const { Books } = require("../../models");
const { Op } = require("sequelize");

const getAllAvailableBook = async (req) => {
  const result = await Books.findAll({ where: { stock: { [Op.gt]: 0 } } });

  return result;
};

module.exports = {
  getAllAvailableBook,
};
