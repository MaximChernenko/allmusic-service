import React from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
import slugify from "slugify";
import Loader from "react-loader-spinner";
// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
import getClearId from "../../utils/helpers/getClearId";
import Icon from "../../utils/helpers/Icon/Icon";
// redux
import albumSelectors from "./duck/selectors";

// Components
import Avatar from "./AlbumAvatar/AlbumAvatar";
import AlbumDataBox from "./AlbumDataBox/AlbumDataBox";
import AlbumMenu from "./AlbumMenu/AlbumMenu";
import AlbumOverview from "./AlbumOverview/AlbumOverview";
import AlbumRateList from "./AlbumRateList/AlbumRateList";
import AlbumUserReviews from "./AlbumUserReviews/AlbumUserReviews";

// styles
import s from "./album.module.css";

const AlbumPage = ({ match: { path, url }, album, artist }) =>
  album && artist ? (
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
          <Link
            to={`/artist/${slugify(artist.name).toLowerCase() +
              "-" +
              artist.id}`}
            className={s.link}
          >
            <p className={s.artistText}>
              {artist.name}
              <Icon
                className={s.linkIcon}
                name="play-button"
                color="#9ba6af"
                size="40px"
              />
            </p>
          </Link>
          <h1 className={s.title}>{album.name}</h1>
          <AlbumRateList album={album} />
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
            <Route
              path={`${path}/user-reviews`}
              render={props => <AlbumUserReviews {...props} album={album} />}
            />
            <Redirect to={`${url}/overview`} />
          </Switch>
        </div>
      </div>
    </main>
  ) : (
    <div className={s.loader}>
      <Loader type="Puff" color="#00BFFF" height="100" width="100" />
    </div>
  );

const mapStateToProps = (
  state,
  {
    match: {
      params: { id }
    }
  }
) => ({
  album: albumSelectors.getAlbumById(state, getClearId(id)),
  artist: albumSelectors.getArtistByAlbum(state, getClearId(id))
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(AlbumPage);
