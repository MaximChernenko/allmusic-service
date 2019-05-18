const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const songSchema = new Schema({
  band: Number,
  album: Number,
  name: String,
  time: String,
  number: Number,
  isPick: Boolean
});

songSchema.plugin(timestamp);

const Song = mongoose.model("Song", songSchema);

module.exports = Song;
