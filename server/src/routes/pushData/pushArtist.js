const Artist = require("../../modules/db/schemas/artist");

const pushArtist = (req, resp) => {
  const artist = req.body;
  const newArtist = new Artist(artist);
  newArtist.save().then(artist => console.log(artist));
};

module.exports = pushArtist;
