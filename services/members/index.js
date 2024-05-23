const { Transactions, Books, Members } = require("../../models");

const getAllMembers = async () => {
  const result = await Members.findAll({
    include: [
      {
        model: Transactions,
        as: "transactions",
        include: [{ model: Books, as: "book" }],
      },
    ],
    order: [
      [
        { model: Transactions, as: "transactions" },
        { model: Books, as: "book" },
        "stock",
        "ASC",
      ],
    ],
  });

  return result;
};

module.exports = {
  getAllMembers,
};
