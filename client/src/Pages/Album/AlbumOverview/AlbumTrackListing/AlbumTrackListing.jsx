import React from "react";
import { connect } from "react-redux";

// redux
import songSelectors from "../../../Song/duck/selectors";
// icons
import streamIcon from "../../../../icons/albumTrackListing/spotify.svg";
import playIcon from "../../../../icons/albumTrackListing/play-button.svg";

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
                <img className={s.playIcon} alt="play" src={playIcon} />
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
                <img className={s.streamIcon} src={streamIcon} alt="stream" />
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
