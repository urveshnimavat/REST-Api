const express = require("express");
const {
    getAllArticles,
    createArticle,
    deleteArticle,
    getArticleByTitle,
    updateArticleByPut,
    deleteAllArticles,
} = require("../controllers/articleController");
const router = express.Router();

///////////////////////////////////Requests Targetting all Articles////////////////////////

router
    .route("/articles")

    .get(getAllArticles)
    .post(createArticle)
    .delete(deleteAllArticles);

////////////////////////////////Requests Targetting A Specific Article////////////////////////

router
    .route("/articles/:articleTitle")

    .get(getArticleByTitle)
    .put(updateArticleByPut)
    .patch(updateArticleByPatch)
    .delete(deleteArticle);

module.exports = router;
