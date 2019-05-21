const token = require("../../utils/token");

const signOut = (req, res) => {
  const t = req.headers.authorization;
  const decoded = token.verify(t);

  if (decoded) {
    res.status(200).json({
      message: "Logout success"
    });
  } else {
    res.status(500).json({
      message: "You have problems!"
    });
  }
};

module.exports = signOut;
