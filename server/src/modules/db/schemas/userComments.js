const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userCommentSchema = new Schema({
  comment: String,
  userId: String,
  userName: String,
  userRating: Number,
  albumId: Number,
  date: Number
});

userCommentSchema.plugin(timestamp);

const UserComment = mongoose.model("UserComment", userCommentSchema);

module.exports = UserComment;
