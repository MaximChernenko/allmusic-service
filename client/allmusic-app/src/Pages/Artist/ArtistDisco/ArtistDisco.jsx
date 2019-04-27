import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// redux
import albumSelectors from "../../Album/duck/selectors";
// Components
import Rating from "./Rating/ServiceRating/ServiceRating";
import UserRating from "./Rating/UserRating/UserRating";

// styles
import s from "./artistDisco.module.css";

const ArtistDisco = ({ albumsObj }) =>
  albumsObj.length > 0 ? (
    <div className={s.wrapper}>
      <h2 className={s.title}>Discography</h2>
      <table className={s.table}>
        <tr>
          <th className={s.prefix} />
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
          <th className={s.suffix} />
        </tr>
        {albumsObj.map(
          album =>
            album && (
              <tr className={`${s.tr} ${album.isPick && s.pickTr}`}>
                <td className={`${s.prefix} ${album.isPick && s.pickPrefix}`} />
                <td className={s.cover}>
                  <Link className={s.link} to={`/album/${album.id}`}>
                    <img
                      className={s.img}
                      src={
                        process.env.PUBLIC_URL +
                        `/images/albums/${album.id}.jpg`
                      }
                      alt={album.name}
                    />
                  </Link>
                </td>
                <td className={s.year}>
                  <p className={s.yearText}>
                    {album.releaseDate.split(" ")[2]}
                  </p>
                </td>
                <td className={s.album}>
                  <Link className={s.link} to={`/album/${album.id}`}>
                    <p className={s.albumText}>{album.name}</p>
                  </Link>
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
                <td className={s.suffix} />
              </tr>
            )
        )}
      </table>
    </div>
  ) : (
    <h2>Loading...</h2>
  );

const mapStateToProps = (state, props) => ({
  albumsObj: albumSelectors.getAlbumsById(state, props.albums)
});

export default connect(mapStateToProps)(ArtistDisco);
