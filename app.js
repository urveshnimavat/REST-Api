//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const articleRouter = require("./routes/article");
const ejs = require("ejs");
const port = process.env.PORT || 3000
require("./db/conn");

const app = express();

app.set("view engine", "ejs");

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(express.static("public"));
app.use("/api", articleRouter);

app.listen(port, function () {
    console.log(`server started on port ${port}`);
});
