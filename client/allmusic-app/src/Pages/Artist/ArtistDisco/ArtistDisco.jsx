import React from "react";

// options
import albumsOpt from "../../../options/albums";

// styles
import s from "./artistDisco.module.css";

const ArtistDisco = ({ albums }) => {
  const albumsObj = albums.map(id => albumsOpt.find(item => item.id === id));
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Discography</h2>
      <table className={s.table}>
        <tr className={s.tr}>
          <th />
          <th className={s.th}>Year</th>
          <th className={s.th}>Album</th>
          <th className={s.th}>Label</th>
          <th className={s.th}>Rating</th>
          <th className={s.th}>User Ratings</th>
        </tr>
        {albumsObj.map(album => (
          <tr className={s.tr}>
            <td>
              <img className={s.img} src={album.imgSrc} alt={album.name} />
            </td>
            <td>{album.releaseDate.split(" ")[2]}</td>
            <td>{album.label}</td>
            <td>{album.rating}</td>
            <td>{album.userRating}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ArtistDisco;
