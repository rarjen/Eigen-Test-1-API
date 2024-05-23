const router = require("express").Router();
const transaction = require("../controllers/transaction");

router.post("/", transaction.create);

module.exports = router;
