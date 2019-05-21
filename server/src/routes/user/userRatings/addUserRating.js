const UserRating = require("../../../modules/db/schemas/userRatings");

const addUserRating = (req, resp) => {
  const data = req.body;
  const newUserRating = new UserRating(data);
  const sendResponse = userRating => {
    resp.status(201).json({
      userRating
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  newUserRating
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = addUserRating;
