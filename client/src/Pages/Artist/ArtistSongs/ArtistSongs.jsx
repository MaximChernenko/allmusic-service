import React from "react";
import { connect } from "react-redux";
// redux
import songSelectors from "./duck/selectors";
// Components
import SongFilter from "./SongFilter/SongFilter";

const Songs = ({ id, songs }) => (
  <div>
    <SongFilter songs={songs} />
  </div>
);

const mapStateToProps = (state, { id }) => ({
  songs: songSelectors
    .getSongsByArtist(state, id)
    .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
});

export default connect(mapStateToProps)(Songs);
