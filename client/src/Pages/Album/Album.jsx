import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
// redux
import albumSelectors from "./duck/selectors";

// Components
import Avatar from "./AlbumAvatar/AlbumAvatar";
import AlbumDataBox from "./AlbumDataBox/AlbumDataBox";
import AlbumMenu from "./AlbumMenu/AlbumMenu";
import AlbumOverview from "./AlbumOverview/AlbumOverview";
import AlbumRateList from "./AlbumRateList/AlbumRateList";

// styles
import s from "./album.module.css";

const AlbumPage = ({ match: { path, url }, album, artist }) =>
  album ? (
    <main className={s.main}>
      <div className={s.aside}>
        <Avatar id={album.id} alt={album.name} isPick={album.isPick} />
        <AlbumDataBox
          releaseDate={album.releaseDate}
          duration={album.duration}
          genre={album.genre}
          styles={album.styles}
        />
      </div>
      <div className={s.wrapper}>
        <header className={s.header}>
          <Link to={`/artist/${artist.id}`} className={s.link}>
            {artist.name}
          </Link>
          <h1 className={s.title}>{album.name}</h1>
          <AlbumRateList rating={album.rating} userRating={album.userRating} />
          <AlbumMenu />
        </header>
        <div>
          <Switch>
            <Route
              path={`${path}/overview`}
              render={props => (
                <AlbumOverview
                  {...props}
                  songs={album.songs}
                  review={album.review}
                />
              )}
            />
            <Redirect to={`${url}/overview`} />
          </Switch>
        </div>
      </div>
    </main>
  ) : (
    <h2>Album not found</h2>
  );

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  album: albumSelectors.getAlbumById(state, id),
  artist: albumSelectors.getArtistByAlbum(state, id)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(AlbumPage);
