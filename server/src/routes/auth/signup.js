require("dotenv").config();

const token = require("../../utils/token");
const User = require("../../modules/db/schemas/user");

const signUp = (req, res) => {
  const userData = req.body;
  const newUser = new User(userData);

  const sendResponse = ({ _id, name, email }) => {
    const genToken = token.generate(_id);
    res.status(201).json({
      status: "success",
      user: { id: _id, name, email },
      token: genToken
    });
  };

  const sendError = () => {
    res.status(400).json({
      error: "user was not saved"
    });
  };

  const sendUserAlreadyExists = () => {
    res.status(400).json({
      error: "user already exists"
    });
  };

  User.findOne({ email: userData.email }).then(user => {
    if (user) {
      sendUserAlreadyExists();
    } else {
      newUser
        .save()
        .then(sendResponse)
        .catch(sendError);
    }
  });
};

module.exports = signUp;
