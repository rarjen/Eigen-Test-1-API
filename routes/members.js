const router = require("express").Router();
const member = require("../controllers/members");

router.get("/", member.getAll);

module.exports = router;
