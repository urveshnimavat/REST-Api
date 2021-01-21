const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/wikiDB", { useNewUrlParser: true })
    .then(() => {
        console.log("connected to DB!");
    })
    .catch((err) => {
        console.log("database connection error occured!");
    });
