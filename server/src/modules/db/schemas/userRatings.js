const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const userRatingSchema = new Schema({
  rating: Number,
  userId: String,
  albumId: Number
});

userRatingSchema.plugin(timestamp);

const UserRating = mongoose.model("UserRating", userRatingSchema);

module.exports = UserRating;
