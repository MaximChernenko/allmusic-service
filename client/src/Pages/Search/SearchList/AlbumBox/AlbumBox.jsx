import React from "react";
import { Link } from "react-router-dom";
import slugify from "slugify";
// styles
import s from "./albumBox.module.css";

const AlbumBox = ({ album }) => (
  <div className={s.wrapper}>
    <div className={s.inner}>
      <h3 className={s.title}>Album</h3>
      <Link
        className={s.link}
        to={`/album/${slugify(album.name).toLowerCase() + "-" + album.id}`}
      >
        {album.name}
      </Link>
      <p className={s.genre}>{album.genre}</p>
    </div>
    <img
      className={s.img}
      src={process.env.PUBLIC_URL + `/images/albums/${album.id}.jpg`}
      alt={album.name}
    />
  </div>
);

export default AlbumBox;
