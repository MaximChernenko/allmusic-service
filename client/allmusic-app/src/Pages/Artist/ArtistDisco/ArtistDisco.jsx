import React from "react";

// options
import albumsOpt from "../../../options/albums";

// styles
import s from "./artistDisco.module.css";

const ArtistDisco = ({ albums }) => {
  const albumsObj = albums.map(id => albumsOpt.find(item => item.id === id));
  return (
    <div>
      <h2>Discography</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Album</th>
          <th>Label</th>
          <th>Rating</th>
          <th>User Ratings</th>
        </tr>
        {albumsObj.map(album => (
          <tr>
            <td>
              <img src={album.imgSrc} alt={album.name} />
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
