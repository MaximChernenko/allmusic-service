const UserSetting = require("../../../modules/db/schemas/userSettings");

const updateUserSettings = (req, resp) => {
  const data = req.body;
  const id = req.params.id;
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
  UserSetting.findOneAndUpdate({ _id: id }, data, { new: true })
    .then(sendResponse)
    .catch(sendError);
};

module.exports = updateUserSettings;
