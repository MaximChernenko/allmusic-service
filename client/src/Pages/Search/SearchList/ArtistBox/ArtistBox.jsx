import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
// styles
import s from "./artistBox.module.css";

const ArtistBox = ({ artist }) => (
  <div className={s.wrapper}>
    <div className={s.inner}>
      <h3 className={s.title}>Artist</h3>
      <Link
        className={s.link}
        to={`/artist/${slugify(artist.name).toLowerCase() + "-" + artist.id}`}
      >
        {artist.name}
      </Link>
      <p className={s.genre}>{artist.genre}</p>
    </div>
    <img
      className={s.img}
      src={process.env.PUBLIC_URL + `/images/artists/${artist.id}.jpg`}
      alt={artist.name}
    />
  </div>
);

export default ArtistBox;
