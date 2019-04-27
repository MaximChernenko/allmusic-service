import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// redux
// Artists
import { getArtists } from "./Pages/Artist/duck/operations";
// Albums
import { getAlbums } from "./Pages/Album/duck/operations";
// Songs
import { getSongs } from "./Pages/Song/duck/operations";

// Components
import MainPage from "./Pages/Main/Main";
import Header from "./Components/Header/HeaderView";
import Footer from "./Components/Footer/Footer";
import ArtistPage from "./Pages/Artist/Artist";
import AlbumPage from "./Pages/Album/Album";

// styles
import s from "./app.module.css";

class App extends Component {
  componentDidMount() {
    const { getArtists, getAlbums, getSongs } = this.props;
    getArtists();
    getAlbums();
    getSongs();
  }

  render() {
    return (
      <div>
        <Header />
        <div className={s.inner}>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route path="/artist/:id" component={ArtistPage} />
            <Route path="/album/:id" component={AlbumPage} />
            <Redirect to="/" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = {
  getArtists,
  getAlbums,
  getSongs
};

export default connect(
  null,
  mapDispatchToProps
)(App);
