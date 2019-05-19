const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userSettingSchema = new Schema({
  name: String,
  surname: String,
  bio: String,
  age: Number,
  userId: String
});

userSettingSchema.plugin(timestamp);

const UserSetting = mongoose.model("UserSetting", userSettingSchema);

module.exports = UserSetting;
