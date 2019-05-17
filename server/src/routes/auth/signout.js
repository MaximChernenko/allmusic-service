const token = require("../../utils/token");

const signOut = (req, res) => {
  const t = req.headers.authorization;
  const decoded = token.verify(t);

  if (decoded) {
    // Все классно, удаляем токен из редиски или leveldb или еще откуда
    res.status(200).json({
      message: "Logout success"
    });
  } else {
    // Токен не валидный, отправляем репорт опсам чтобы разобрались кто пытался кинуть нам грязный токен
    res.status(500).json({
      message: "You have problems!"
    });
  }
};

module.exports = signOut;
