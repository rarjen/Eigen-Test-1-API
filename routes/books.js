const router = require("express").Router();
const book = require("../controllers/books");

router.get("/", book.getAll);

module.exports = router;
