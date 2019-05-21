const Article = require("../../modules/db/schemas/article");

const getArticles = (req, resp) => {
  const sendResponse = articles => {
    resp.status(200).json({
      articles
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  Article.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getArticles;
