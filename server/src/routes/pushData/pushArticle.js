const Article = require("../../modules/db/schemas/article");

const pushArticle = (req, resp) => {
  const data = req.body;
  const newArticle = new Article(data);
  newArticle.save().then(article => console.log(article));
};

module.exports = pushArticle;
