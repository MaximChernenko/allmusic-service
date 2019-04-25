import React from "react";

// options
import albumsOpt from "../../../options/albums";

// Components
import Rating from "./Rating/ServiceRating/ServiceRating";
import UserRating from "./Rating/UserRating/UserRating";

// styles
import s from "./artistDisco.module.css";

const ArtistDisco = ({ albums }) => {
  const albumsObj = albums.map(id => albumsOpt.find(item => item.id === id));
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Discography</h2>
      <table className={s.table}>
        <tr>
          <th className={s.cover} />
          <th className={s.year}>
            <p className={s.headText}>Year</p>
          </th>
          <th className={s.album}>
            <p className={s.headText}>Album</p>
          </th>
          <th className={s.label}>
            <p className={s.headText}>Label</p>
          </th>
          <th className={s.rating}>
            <p className={s.headText}>Rating</p>
          </th>
          <th className={s.userRating}>
            <p className={s.headText}>User Ratings</p>
          </th>
        </tr>
        {albumsObj.map(album => (
          <tr className={s.tr}>
            <td className={s.cover}>
              <img className={s.img} src={album.imgSrc} alt={album.name} />
            </td>
            <td className={s.year}>
              <p className={s.yearText}>{album.releaseDate.split(" ")[2]}</p>
            </td>
            <td className={s.album}>
              <p className={s.albumText}>{album.name}</p>
            </td>
            <td className={s.label}>
              <p className={s.labelText}>{album.label}</p>
            </td>
            <td className={s.rating}>
              <Rating rating={album.rating} />
            </td>
            <td className={s.userRating}>
              <UserRating rating={album.userRating} />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ArtistDisco;
