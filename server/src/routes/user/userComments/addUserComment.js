const UserComment = require("../../../modules/db/schemas/userComments");

const addUserComment = (req, resp) => {
  const data = req.body;
  const newUserComment = new UserComment(data);
  const sendResponse = userComment => {
    resp.status(201).json({
      userComment
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  newUserComment
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = addUserComment;
