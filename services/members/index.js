const { Transactions, Books, Members } = require("../../models");
const ApiError = require("../../helpers/errorHandler");

const getAllMembers = async () => {
  const result = await Members.findAll({
    include: [{ model: Transactions, as: "transactions" }],
  });

  return result;
};

module.exports = {
  getAllMembers,
};
