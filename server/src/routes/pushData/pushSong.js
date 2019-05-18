const Song = require("../../modules/db/schemas/song");

const pushSong = (req, resp) => {
  const data = req.body;
  const song = new Song(data);
  song.save().then(data => console.log(data));
};

module.exports = pushSong;
