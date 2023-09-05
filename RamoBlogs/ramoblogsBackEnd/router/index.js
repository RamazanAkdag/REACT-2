const express = require("express");
const auth = require("./auth");
const article = require("./article");
const user = require("./user");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    success: true,
    data: "no data",
  });
});

router.use("/auth", auth);
router.use("/article", article);
router.use("/user", user);

module.exports = router;
