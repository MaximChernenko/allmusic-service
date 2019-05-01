import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
// redux
import {
  setAllFilter,
  setArtistFilter,
  setAlbumFilter,
  setSongFilter
} from "./duck/actions";
import searchSelectors from "../../../Components/Header/SearchInput/duck/selectors";
import searchFilterSelectors from "../../../Pages/Search/SearchBox/duck/selectors";
// styles
import s from "./searchBox.module.css";

const SearchBox = ({
  setAllFilter,
  setArtistFilter,
  setAlbumFilter,
  setSongFilter,
  artists,
  albums,
  songs,
  searchFilter
}) => (
  <div className={s.wrapper}>
    <div className={s.inner}>
      <h2 className={s.title}>Search Filters</h2>
      <Link className={s.link} to="/advanced-search">
        Advanced Search
      </Link>
    </div>
    <div>
      <h3 className={s.innerTitle}>Result Type</h3>
      <ul className={s.list}>
        <li>
          <button
            className={`${s.btn} ${searchFilter === "ALL" && s.btnActive}`}
            onClick={() => {
              setAllFilter();
            }}
            type="button"
          >
            All {`(${artists.length + albums.length + songs.length})`}
          </button>
        </li>
        <li>
          <button
            className={`${s.btn} ${searchFilter === "ARTIST" && s.btnActive}`}
            onClick={() => {
              setArtistFilter();
            }}
            type="button"
          >
            Artists {`(${artists.length})`}
          </button>
        </li>
        <li>
          <button
            className={`${s.btn} ${searchFilter === "ALBUM" && s.btnActive}`}
            onClick={() => {
              setAlbumFilter();
            }}
            type="button"
          >
            Albums {`(${albums.length})`}
          </button>
        </li>
        <li>
          <button
            className={`${s.btn} ${searchFilter === "SONG" && s.btnActive}`}
            onClick={() => {
              setSongFilter();
            }}
            type="button"
          >
            Songs {`(${songs.length})`}
          </button>
        </li>
      </ul>
    </div>
  </div>
);

const mapDispatchToProps = {
  setAllFilter,
  setArtistFilter,
  setAlbumFilter,
  setSongFilter
};

const mapStateToProps = state => ({
  artists: searchSelectors.getArtistsBySearch(state),
  albums: searchSelectors.getAlbumsBySearch(state),
  songs: searchSelectors.getSongsBySearch(state),
  searchFilter: searchFilterSelectors.getSearchFilter(state)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);
