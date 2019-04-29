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
  songs: songSelectors.getSongsByArtist(state, id)
});

export default connect(mapStateToProps)(Songs);
