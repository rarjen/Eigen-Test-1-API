const router = require("express").Router();
const responseHandler = require("../helpers/responseHandler");

// Router Test
router.get("/test", (req, res) => {
  return responseHandler.succes(res, "Success");
});

module.exports = router;
