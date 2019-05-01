import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
// redux
import searchSelectors from "../../../Components/Header/SearchInput/duck/selectors";
// Components
import ArtistBox from "./ArtistBox/ArtistBox";
import AlbumBox from "./AlbumBox/AlbumBox";
import SongBox from "./SongBox/SongBox";
// utils
import withScrollToTop from "../../../utils/hocs/withScrollToTop";
// styles
import s from "./searchList.module.css";

const SearchList = ({ search, artists, albums, songs }) => (
  <div className={s.wrapper}>
    <h2 className={s.title}>
      {" "}
      {artists.length + albums.length + songs.length} search results
      {`${search.length > 0 ? ` for ${search}` : ""} `}
    </h2>
    <ul className={s.list}>
      {artists.map(artist => (
        <li className={s.item}>
          <ArtistBox artist={artist} />
        </li>
      ))}
      {albums.map(album => (
        <li className={s.item}>
          <AlbumBox album={album} />
        </li>
      ))}
      {songs.map(song => (
        <li className={s.item}>
          <SongBox song={song} />
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => ({
  search: searchSelectors.getSearch(state),
  artists: searchSelectors.getArtistsBySearch(state),
  albums: searchSelectors.getAlbumsBySearch(state),
  songs: searchSelectors.getSongsBySearch(state)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(SearchList);
