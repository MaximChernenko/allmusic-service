import React from "react";
import { connect } from "react-redux";
// redux
import songSelectors from "./duck/selectors";

// styles
import s from "./songs.module.css";

const Songs = ({ id, songs }) => console.log(songs) || <div />;

const mapStateToProps = (state, { id }) => ({
  songs: songSelectors.getSongsByArtist(state, id)
});

export default connect(mapStateToProps)(Songs);

// impl!!!
