import React from "react";
import { connect } from "react-redux";

// redux
import songSelectors from "../../../Artist/ArtistSongs/duck/selectors";

// utils
import Icon from "../../../../utils/helpers/Icon/Icon";

// styles
import s from "./albumTrackListing.module.css";

const AlbumTrackListing = ({ songsObj, artistBySong }) => (
  <div className={s.wrapper}>
    <h2 className={s.title}>Track Listing</h2>
    <table className={s.table}>
      <tbody>
        <tr>
          <th className={s.prefix} />
          <th className={s.play} />
          <th className={s.number} />
          <th className={s.name}>
            <p className={s.headText}>Title</p>
          </th>
          <th className={s.performer}>
            <p className={s.headText}>Performer</p>
          </th>
          <th className={s.time}>
            <p className={s.headText}>Time</p>
          </th>
          <th className={s.stream} />
          <th className={s.suffix} />
        </tr>
        {songsObj.map(song =>
          song ? (
            <tr key={song.id} className={`${s.tr} ${song.isPick && s.pickTr}`}>
              <td className={`${s.prefix} ${song.isPick && s.pickPrefix}`} />
              <td className={s.play}>
                <Icon
                  className={s.icon}
                  size="30px"
                  color="#9ba6af"
                  name="play-button"
                />
              </td>
              <td className={s.number}>{song.number}</td>
              <td className={s.name}>
                <p className={s.nameText}>{song.name}</p>
              </td>
              <td className={s.performer}>
                <p className={s.performerText}>{artistBySong.name}</p>
              </td>
              <td className={s.time}>
                <p className={s.timeText}>{song.time}</p>
              </td>
              <th>
                <Icon
                  className={s.icon}
                  size="20px"
                  color="#909ba3"
                  name="spotify"
                />
              </th>
              <td className={s.suffix} />
            </tr>
          ) : null
        )}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = (state, { songs }) => ({
  songsObj: songSelectors.getSongsById(state, songs),
  artistBySong: songSelectors.getArtistBySong(state, songs)
});

export default connect(mapStateToProps)(AlbumTrackListing);
