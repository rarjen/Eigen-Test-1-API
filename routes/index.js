const router = require("express").Router();
const responseHandler = require("../helpers/responseHandler");

const member = require("./members");
const book = require("./books");
const transaction = require("./transaction");

// Router Test
router.get("/test", (req, res) => {
  return responseHandler.succes(res, "Success");
});

router.use("/members", member);
router.use("/books", book);
router.use("/transaction", transaction);

module.exports = router;
