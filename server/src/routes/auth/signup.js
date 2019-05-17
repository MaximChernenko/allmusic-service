require("dotenv").config();

const token = require("../../utils/token");
const User = require("../../modules/db/schemas/user");

const signUp = (req, res) => {
  console.log(req.body);
  const { name, email, password } = req.body;

  const userData = { name, email, password };

  const newUser = new User(userData);

  const sendResponse = ({ _id, name, email }) => {
    const genToken = token.generate(_id);
    console.log(genToken);
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

  User.findOne({ email })
    .then(user => {
      if (user) {
        sendUserAlreadyExists();
      } else {
        newUser
          .save()
          .then(sendResponse)
          .catch(sendError);
      }
    })
    .catch(sendUserAlreadyExists);
};

module.exports = signUp;
