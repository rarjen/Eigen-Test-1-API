const router = require("express").Router();
const transaction = require("../controllers/transaction");

router.post("/", transaction.create);
router.patch("/:id", transaction.update);

module.exports = router;
