const UserRating = require("../../../modules/db/schemas/userRatings");

const updateUserRating = (req, resp) => {
  const data = req.body;
  const id = req.params.id;
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
  UserRating.findOneAndUpdate({ _id: id }, data, { new: true })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateUserRating;
