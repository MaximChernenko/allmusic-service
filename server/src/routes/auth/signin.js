require("dotenv").config();

const token = require("../../utils/token");
const User = require("../../modules/db/schemas/user");

const signIn = (req, res) => {
  const { email, password } = req.body;
  const sendResponse = ({ _id, name, email }) => {
    res.status(200).json({
      status: "success",
      user: { id: _id, name, email },
      token: token.generate(_id)
    });
  };

  const sendError = () => {
    res.status(400).json({
      error: "user not found"
    });
  };

  User.findOne({ email, password })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = signIn;
