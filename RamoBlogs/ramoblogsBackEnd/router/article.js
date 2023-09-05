const express = require("express");
const tokenCheck = require("../middleware/jwtAuth");
const {
  getUserArticleCards,
  getArticle,
  getAllArticleCards,
  addArticle,
} = require("../controller/article");

const router = express.Router();

//user gets own article preview cards
router.get("/cards/users/getall", tokenCheck, getUserArticleCards);
//get all article preview cards
router.get("/cards/getall", getAllArticleCards);
//get One Article's infos
router.get("/getarticle/:articleId", tokenCheck, getArticle);
//Add new Article
router.post("/add", tokenCheck, addArticle);

module.exports = router;
