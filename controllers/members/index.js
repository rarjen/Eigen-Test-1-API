const { getAllMembers } = require("../../services/members");
const responseHandler = require("../../helpers/responseHandler");

const getAll = async (req, res, next) => {
  try {
    const result = await getAllMembers();

    return responseHandler.succes(res, "Success get members", result);
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll };
