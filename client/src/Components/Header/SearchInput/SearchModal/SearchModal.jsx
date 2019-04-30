import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import slugify from "slugify";
// redux
import searchSelectors from "../duck/selectors";
import artistSelectors from "../../../../Pages/Artist/duck/selectors";
// styles
import s from "./searchModal.module.css";

const SearchModal = ({
  artists,
  albums,
  songs,
  allArtists,
  searchValue,
  closeModal,
  onReset
}) => (
  <div className={s.wrapper}>
    <div className={s.box}>
      {artists.length > 0 && <h2 className={s.title}>Artists</h2>}
      {artists.length > 0 && (
        <ul className={s.list}>
          {artists.map(
            artist =>
              artist && (
                <li className={s.item} key={artist.id}>
                  <Link
                    onClick={() => {
                      onReset();
                      closeModal();
                    }}
                    className={s.link}
                    to={`/artist/${slugify(artist.name).toLowerCase() +
                      "-" +
                      artist.id}`}
                  >
                    {artist.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      )}
    </div>
    <div className={s.box}>
      {albums.length > 0 && <h2 className={s.title}>Albums</h2>}
      {albums.length > 0 && (
        <ul className={s.list}>
          {albums.map(
            album =>
              album && (
                <li className={s.item} key={album.id}>
                  <Link
                    onClick={() => {
                      onReset();
                      closeModal();
                    }}
                    className={s.linkArtist}
                    to={`/artist/${slugify(
                      allArtists[album.band]
                        ? allArtists[album.band].name.toLowerCase()
                        : "no-name"
                    ) +
                      "-" +
                      album.band}`}
                  >
                    {allArtists[album.band] && allArtists[album.band].name}
                  </Link>
                  <Link
                    onClick={() => {
                      onReset();
                      closeModal();
                    }}
                    className={s.link}
                    to={`/album/${slugify(album.name).toLowerCase() +
                      "-" +
                      album.id}`}
                  >
                    {album.name}
                  </Link>
                </li>
              )
          )}
        </ul>
      )}
    </div>
    <div className={s.box}>
      {songs.length > 0 && <h2 className={s.title}>Songs</h2>}
      {songs.length > 0 && (
        <ul className={s.list}>
          {songs.map(
            song =>
              song && (
                <li className={s.item} key={song.id}>
                  <Link
                    onClick={() => {
                      onReset();
                      closeModal();
                    }}
                    className={s.linkArtist}
                    to={`/artist/${slugify(
                      allArtists[song.band]
                        ? allArtists[song.band].name.toLowerCase()
                        : "no-name"
                    ) +
                      "-" +
                      song.band}`}
                  >
                    {allArtists[song.band] && allArtists[song.band].name}
                  </Link>
                  <HashLink
                    onClick={() => {
                      onReset();
                      closeModal();
                    }}
                    className={s.link}
                    to={`/artist/${song.band}/songs/?letter=all#${slugify(
                      song.name
                    ).toLowerCase() +
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
                </li>
              )
          )}
        </ul>
      )}
    </div>
    <Link
      to="/search"
      onClick={() => {
        onReset();
        closeModal();
      }}
      className={s.linkSeeAll}
    >
      See all results for: {searchValue}
    </Link>
  </div>
);

const mapStateToProps = state => ({
  allArtists: artistSelectors.getArtists(state),
  artists: searchSelectors.getArtistsBySearch(state).slice(0, 3),
  albums: searchSelectors.getAlbumsBySearch(state).slice(0, 3),
  songs: searchSelectors.getSongsBySearch(state).slice(0, 3),
  searchValue: searchSelectors.getSearch(state)
});

export default connect(mapStateToProps)(SearchModal);
