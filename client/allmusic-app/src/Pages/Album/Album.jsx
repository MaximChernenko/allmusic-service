import React, { Component } from "react";
import { Link, Route, Switch, Redirect } from "react-router-dom";
// options
import albums from "../../options/albums";
import artists from "../../options/artists";

// Components
import Avatar from "./AlbumAvatar/AlbumAvatar";
import AlbumDataBox from "./AlbumDataBox/AlbumDataBox";
import AlbumMenu from "./AlbumMenu/AlbumMenu";
import AlbumOverview from "./AlbumOverview/AlbumOverview";
import AlbumRateList from "./AlbumRateList/AlbumRateList";

// styles
import s from "./album.module.css";

export default class AlbumPage extends Component {
  state = {
    album: null,
    artist: null
  };

  componentDidMount() {
    // get id
    const {
      match: {
        params: { id }
      }
    } = this.props;

    const album = albums.find(item => item.id === Number(id));
    const artist = artists.find(item => item.id === album.band);
    this.setState({ album, artist });
  }
  render() {
    const {
      match: { path, url }
    } = this.props;
    const { album, artist } = this.state;

    return album ? (
      <main className={s.main}>
        <div className={s.aside}>
          <Avatar
            imgSrc={album.imgSrc}
            alt={album.name}
            isPick={album.isPick}
          />
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
            <AlbumRateList
              rating={album.rating}
              userRating={album.userRating}
            />
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
  }
}
