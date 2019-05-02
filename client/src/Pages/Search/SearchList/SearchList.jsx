import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// redux
import searchSelectors from "../../../Components/Header/SearchInput/duck/selectors";
import searchFilterSelectors from "../../../Pages/Search/SearchBox/duck/selectors";
// Components
import ArtistBox from "./ArtistBox/ArtistBox";
import AlbumBox from "./AlbumBox/AlbumBox";
import SongBox from "./SongBox/SongBox";
// utils
import withScrollToTop from "../../../utils/hocs/withScrollToTop";
// styles
import s from "./searchList.module.css";

const SearchList = ({ search, artists, albums, songs, searchFilter }) => (
  <div className={s.wrapper}>
    <h2 className={s.title}>
      {searchFilter === "ALL"
        ? artists.length + albums.length + songs.length + " "
        : searchFilter === "ARTIST"
        ? artists.length + " artists "
        : searchFilter === "ALBUM"
        ? albums.length + " albums "
        : songs.length + " songs "}
      search results
      {`${search.length > 0 ? ` for ${search}` : ""} `}
    </h2>
    <ul className={s.list}>
      {searchFilter === "ALL" || searchFilter === "ARTIST"
        ? artists.map(artist => (
            <li key={artist.id} className={s.item}>
              <ArtistBox artist={artist} />
            </li>
          ))
        : null}
      {searchFilter === "ALL" || searchFilter === "ALBUM"
        ? albums.map(album => (
            <li key={album.id} className={s.item}>
              <AlbumBox album={album} />
            </li>
          ))
        : null}
      {searchFilter === "ALL" || searchFilter === "SONG"
        ? songs.map(song => (
            <li key={song.id} className={s.item}>
              <SongBox song={song} />
            </li>
          ))
        : null}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  search: searchSelectors.getSearch(state),
  artists: searchSelectors.getArtistsBySearch(state),
  albums: searchSelectors.getAlbumsBySearch(state),
  songs: searchSelectors.getSongsBySearch(state),
  searchFilter: searchFilterSelectors.getSearchFilter(state)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(SearchList);
