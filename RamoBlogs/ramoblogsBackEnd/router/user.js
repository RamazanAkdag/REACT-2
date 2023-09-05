const express = require("express");

const { getUserById } = require("../controller/user");
const router = express.Router();

router.get("/getbyid/:id", getUserById);

module.exports = router;
