const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const albumSchema = new Schema({
  band: Number,
  name: String,
  review: String,
  label: String,
  rating: Number,
  userRating: Number,
  isPick: Boolean,
  releaseDate: String,
  duration: String,
  genre: String,
  styles: Array,
  songs: Array,
  isRecommended: Boolean
});

albumSchema.plugin(timestamp);

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
