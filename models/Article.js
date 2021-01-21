const mongoose = require("mongoose");
require("../db/conn");

const articleSchema = {
    title: String,
    content: String,
};

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
