const UserRating = require("../../../modules/db/schemas/userRatings");

const getUserRating = (req, resp) => {
  const sendResponse = userRatings => {
    resp.status(200).json({
      userRatings
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  UserRating.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUserRating;
