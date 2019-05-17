const User = require("../../modules/db/schemas/user");

const current = (req, res) => {
  console.log("from current: " + req.user);
  const { id } = req.user;

  const sendResponse = ({ _id, name, email }) => {
    res.status(200).json({
      status: "success",
      user: { id: _id, name, email }
    });
  };

  const sendError = () => {
    res.status(400).json({
      error: "cannot refresh current user"
    });
  };

  User.findById(id)
    .then(sendResponse)
    .catch(sendError);
};

module.exports = current;
