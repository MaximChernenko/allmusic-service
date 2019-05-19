const UserSetting = require("../../../modules/db/schemas/userSettings");

const getUserSettings = (req, resp) => {
  const data = req.body;
  const defaultUserSettings = new UserSetting(data);
  const sendResponse = userSettings => {
    resp.status(201).json({
      userSettings
    });
  };
  const sendError = error => {
    resp.status(404).json({
      error
    });
  };
  defaultUserSettings
    .save()
    .then(sendResponse)
    .catch(sendError);
};

module.exports = getUserSettings;
