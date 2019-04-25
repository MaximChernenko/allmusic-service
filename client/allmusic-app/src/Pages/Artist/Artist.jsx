import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
// options

import artists from "../../options/artists";

// Components
import ArtistMenu from "./ArtistMenu/ArtistMenu";
import ArtistBio from "./ArtistBio/ArtistBio";
import ArtistDisco from "./ArtistDisco/ArtistDisco";
import Avatar from "./ArtistAvatar/ArtistAvatar";
import ArtistDataBox from "./ArtistDataBox/ArtistDataBox";

// styles
import s from "./artist.module.css";

export default class ArtistPage extends Component {
  state = {
    artist: null
  };

  componentDidMount() {
    // get id
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const artist = artists.find(item => item.id === Number(id));
    this.setState({ artist });
    const {
      history,
      match: { url }
    } = this.props;
    history.replace(`${url}/biography`);
  }

  render() {
    const {
      match: { path, url }
    } = this.props;
    console.log(`${url}/biography`);
    const { artist } = this.state;
    return artist ? (
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
                parh={`${path}/discography`}
                render={props => (
                  <ArtistDisco {...props} albums={artist.albums} />
                )}
              />
            </Switch>
          </div>
        </div>
        <div className={s.aside}>
          <Avatar imgSrc={artist.imgSrc} alt={artist.name} />
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
  }
}
