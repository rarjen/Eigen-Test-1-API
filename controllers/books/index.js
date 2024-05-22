const { getAllAvailableBook } = require("../../services/books");
const responseHandler = require("../../helpers/responseHandler");

const getAll = async (req, res, next) => {
  try {
    const result = await getAllAvailableBook();

    return responseHandler.succes(res, "Success get books", result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };
