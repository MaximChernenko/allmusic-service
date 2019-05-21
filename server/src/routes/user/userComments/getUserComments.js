const UserComment = require("../../../modules/db/schemas/userComments");

const getUserComment = (req, resp) => {
  const sendResponse = userComments => {
    resp.status(200).json({
      userComments
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  UserComment.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUserComment;
