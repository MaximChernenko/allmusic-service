const Album = require("../../modules/db/schemas/album");

const pushAlbum = (req, resp) => {
  const data = req.body;
  const album = new Album(data);
  album.save().then(data => console.log(data));
};

module.exports = pushAlbum;
