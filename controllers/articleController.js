const Article = require("../models/Article");

exports.getAllArticles = async (req, res) => {
    try {
        const foundArticles = await Article.find({});
        res.status(200).send(foundArticles);
    } catch (e) {
        res.status(404).send(e);
    }
};

exports.createArticle = async (req, res) => {
    try {
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content,
        });
        await newArticle.save();
        res.status(201).send(newArticle);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.deleteAllArticles = async (req, res) => {
    try {
        await Article.deleteMany();
        res.status(200).send("Successfully deleted all articles!");
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.getArticleByTitle = async (req, res) => {
    try {
        const reqArticle = await Article.findOne({
            title: req.params.articleTitle,
        });
        res.status(200).send(reqArticle);
    } catch (e) {
        res.status(400).send(e);
    }
};

exports.updateArticleByPut = async (req, res) => {
    try {
        const updateArticle = await Article.update(
            { title: req.params.articleTitle },
            { title: req.body.title, content: req.body.content },
            { overwrite: true }
        );
        res.status(201).send(updateArticle);
    } catch (e) {
        res.status(501).send(e);
    }
};

exports.updateArticleByPatch = async (req, res) => {
    try {
        const updateArticle = await Article.updateOne(
            { title: req.params.articleTitle },
            { $set: req.body }
        );
        res.status(201).send(updateArticle);
    } catch (e) {
        res.status(501).send(e);
    }
};

exports.deleteArticle = async (req, res) => {
    try {
        await Article.deleteOne({ title: req.params.articleTitle });
        res.status(200).send("successfully deleted article!");
    } catch (e) {
        res.status(501).send(e);
    }
};
