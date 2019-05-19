const UserSetting = require("../../../modules/db/schemas/userSettings");

const getUserSettings = (req, resp) => {
  const sendResponse = userSettings => {
    resp.status(200).json({
      userSettings
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  UserSetting.find()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUserSettings;
