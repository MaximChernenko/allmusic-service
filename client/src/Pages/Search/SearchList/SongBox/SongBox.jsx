import React from "react";
import { connect } from "react-redux";
import { HashLink } from "react-router-hash-link";
import slugify from "slugify";
// redux
import artistSelectors from "../../../Artist/duck/selectors";
// styles
import s from "./songBox.module.css";

const SongBox = ({ song, artist }) => (
  <div className={s.wrapper}>
    <h3 className={s.title}>Song</h3>
    <HashLink
      className={s.link}
      to={`/artist/${slugify(artist.name).toLowerCase() +
        "-" +
        artist.id}/songs/?letter=all#${slugify(song.name).toLowerCase() +
        "-" +
        song.id}`}
      scroll={el => {
        const coords = el.getBoundingClientRect();
        window.scrollTo({
          top: coords.top - window.screen.height / 2
        });
      }}
    >
      {song.name}
    </HashLink>
    <p className={s.text}>Written by {artist.name}</p>
  </div>
);

const mapStateToProps = (state, { song: { band } }) => ({
  artist: artistSelectors.getArtist(state, band)
});

export default connect(mapStateToProps)(SongBox);
