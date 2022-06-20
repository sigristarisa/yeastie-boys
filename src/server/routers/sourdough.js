const express = require("express");
const router = express.Router();
const { setStarterName } = require("../controllers/sourdough");

router.post("/", setStarterName);

module.exports = router;
