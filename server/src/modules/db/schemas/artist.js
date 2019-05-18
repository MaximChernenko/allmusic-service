const mongoose = require("mongoose");
const { Schema } = mongoose;
const timestamp = require("../middleware/timestamp");

const artistSchema = new Schema({
  name: String,
  active: String,
  formed: String,
  genre: String,
  styles: Array,
  groupMembers: Array,
  albums: Array,
  bio: String
});

artistSchema.plugin(timestamp);

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
