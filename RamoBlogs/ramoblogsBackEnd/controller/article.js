const { getOracleConnection } = require("../helper/OracleDbHelper");

const getUserArticleCards = async (req, res) => {
  console.log("GET http://localhost:5000/api/article/cards/users/getall");
  let dbConn;
  try {
    const userId = req.access_token.data.ID;
    dbConn = await getOracleConnection();
    const sql =
      "select id,authorUserId ,articleUrl, articleTitle, articleIntroduction, articleImgUrl, tags from article_preview_cards where authorUserId=:id";
    const result = (await dbConn.execute(sql, [userId])).rows;

    res.status(200).json({ success: "true", data: result });
  } catch (err) {
    console.log(err);
  } finally {
    dbConn.close();
  }
};

const getAllArticleCards = async (req, res) => {
  console.log("GET http://localhost:5000/api/article/cards/getall");
  let dbConn;
  try {
    dbConn = await getOracleConnection();
    const sql =
      "select id,authorUserId ,articleUrl, articleTitle, articleIntroduction, articleImgUrl, tags from article_preview_cards";
    const result = (await dbConn.execute(sql)).rows;

    res.status(200).json({ success: "true", data: result });
  } catch (err) {
    console.log(err);
  } finally {
    dbConn.close();
  }
};
const getArticle = async (req, res) => {
  const articleId = req.params.articleId;
  console.log("GET http://localhost:5000/api/article/getarticle/" + articleId);
  let dbConn;
  try {
    dbConn = await getOracleConnection();
    const sql =
      "select  id, authorUserId, creationDate, updateDate, articleUrl, articleTitle, article, articleImgUrl  from articles where id=:id";
    const result = (await dbConn.execute(sql, [articleId])).rows;

    res.status(200).json({ success: "true", data: result });
  } catch (err) {
    console.log(err);
  } finally {
    dbConn.close();
  }
};

const addArticle = async (req, res) => {
  let dbConn;
  try {
    const {
      id,
      creationDate,
      updateDate,
      articleUrl,
      articleTitle,
      article,
      articleImgUrl,
      tags,
    } = req.body;

    const authorUserId = req.access_token.data.ID;

    console.log(
      "POST http://localhost:5000/api/article/add" +
        `{${id},${authorUserId},${creationDate},${updateDate},${articleUrl},${articleTitle}}`
    );

    dbConn = await getOracleConnection();
    //inserting query new article to db
    const artilceInsert =
      "insert into articles (id,authorUserId,articleUrl,articleTitle,article,articleImgUrl) " +
      "values (:id,:authorUserId,:articleUrl,:articleTitle,:article,:articleImgUrl) ";
    const articleResult = await dbConn.execute(artilceInsert, [
      id,
      authorUserId,
      articleUrl,
      articleTitle,
      article,
      articleImgUrl,
    ]);

    const cardInsert =
      "insert into article_preview_cards (id,authorUserId ,articleUrl, articleTitle, articleIntroduction, articleImgUrl, tags)" +
      "values (:id,:authorUserId,:articleUrl,:articleTitle,:articleIntroduction,:articleImgUrl,:tags)";

    //first 10 words of article
    const articleIntroduction = article.split(" ", 14).join(" ") + "...";
    const oracleTags = tags.join(",");

    const cardResult = dbConn.execute(cardInsert, [
      id,
      authorUserId,
      articleUrl,
      articleTitle,
      articleIntroduction,
      articleImgUrl,
      oracleTags,
    ]);

    dbConn.commit();

    res.status(201).json({
      success: true,
      message: "new article and card successfully added",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: "false",
      message: "Failed to create article",
    });
  } finally {
    dbConn.close();
  }
};

module.exports = {
  getUserArticleCards,
  getAllArticleCards,
  getArticle,
  addArticle,
};
