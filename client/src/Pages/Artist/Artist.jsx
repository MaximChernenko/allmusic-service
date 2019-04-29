import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "redux";
// utils
import withScrollToTop from "../../utils/hocs/withScrollToTop";
// redux
import artistSelectors from "./duck/selectors";

// Components
import ArtistMenu from "./ArtistMenu/ArtistMenu";
import ArtistBio from "./ArtistBio/ArtistBio";
import ArtistDisco from "./ArtistDisco/ArtistDisco";
import Avatar from "./ArtistAvatar/ArtistAvatar";
import ArtistDataBox from "./ArtistDataBox/ArtistDataBox";
import ArtistSongs from "../Song/Songs";

// styles
import s from "./artist.module.css";

const ArtistPage = ({ match: { path, url }, artist }) =>
  artist ? (
    <main className={s.main}>
      <div className={s.wrapper}>
        <header className={s.header}>
          <h2 className={s.title}>{artist.name}</h2>
          <ArtistMenu />
        </header>
        <div className={s.inner}>
          <Switch>
            <Route
              path={`${path}/biography`}
              render={props => <ArtistBio {...props} bio={artist.bio} />}
            />
            <Route
              path={`${path}/discography`}
              render={props => (
                <ArtistDisco {...props} albums={artist.albums} />
              )}
            />
            <Route
              path={`${path}/songs`}
              render={props => <ArtistSongs {...props} id={artist.id} />}
            />
            <Redirect to={`${url}/biography`} />
          </Switch>
        </div>
      </div>
      <div className={s.aside}>
        <Avatar id={artist.id} alt={artist.name} />
        <ArtistDataBox
          active={artist.active}
          formed={artist.formed}
          genre={artist.genre}
          styles={artist.styles}
          groupMembers={artist.groupMembers}
        />
      </div>
    </main>
  ) : (
    <h2>Artist Not Found</h2>
  );

const mapStateToProps = (state, props) => ({
  artist: artistSelectors.getArtist(state, props.match.params.id)
});

export default compose(
  connect(mapStateToProps),
  withScrollToTop
)(ArtistPage);
