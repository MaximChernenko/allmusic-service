const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const articleSchema = new Schema({
  content: String
});

articleSchema.plugin(timestamp);

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
