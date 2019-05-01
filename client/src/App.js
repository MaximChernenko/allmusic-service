import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// redux
// Artists
import { getArtists } from "./Pages/Artist/duck/operations";
// Albums
import { getAlbums } from "./Pages/Album/duck/operations";
// Songs
import { getSongs } from "./Pages/Artist/ArtistSongs/duck/operations";
// Articles
import { getArticles } from "./Pages/Article/duck/operations";

// Components
import MainPage from "./Pages/Main/Main";
import Header from "./Components/Header/HeaderView";
import Footer from "./Components/Footer/Footer";
import ArtistPage from "./Pages/Artist/Artist";
import AlbumPage from "./Pages/Album/Album";
import ArticlePage from "./Pages/Article/Article";
import ArticlesPage from "./Pages/Articles/Articles";
import RecommendationsPage from "./Pages/Recommendations/Recommendations";
import SearchPage from "./Pages/Search/Search";

// styles
import s from "./app.module.css";

class App extends Component {
  componentDidMount() {
    const { getArtists, getAlbums, getSongs, getArticles } = this.props;
    getArtists();
    getAlbums();
    getSongs();
    getArticles();
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
            <Route path="/articles" component={ArticlesPage} />
            <Route path="/article/:id" component={ArticlePage} />
            <Route path="/recommendations" component={RecommendationsPage} />
            <Route path="/search" component={SearchPage} />
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
  getSongs,
  getArticles
};

export default connect(
  null,
  mapDispatchToProps
)(App);
