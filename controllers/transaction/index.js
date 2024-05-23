const { createTransaction } = require("../../services/transaction");
const responseHandler = require("../../helpers/responseHandler");

const create = async (req, res, next) => {
  try {
    const result = await createTransaction(req);

    return responseHandler.created(res, "Success create transaction", result);
  } catch (error) {
    next(error);
  }
};

module.exports = { create };
