// import {Switch, Route, } from 'react-router-dom';
import React from "react";
import Loadable from "react-loadable";
import Loader from "react-loader-spinner";

const Spinner = () => (
  <Loader type="Puff" color="#00BFFF" height="100" width="100" />
);

// async components

const MainPage = Loadable({
  loader: () => import("./Pages/Main/Main"),
  loading: Spinner
});

const ArtistPage = Loadable({
  loader: () => import("./Pages/Artist/Artist"),
  loading: Spinner
});

const AlbumPage = Loadable({
  loader: () => import("./Pages/Album/Album"),
  loading: Spinner
});

const ArticlePage = Loadable({
  loader: () => import("./Pages/Article/Article"),
  loading: Spinner
});

const ArticlesPage = Loadable({
  loader: () => import("./Pages/Articles/Articles"),
  loading: Spinner
});

const RecommendationsPage = Loadable({
  loader: () => import("./Pages/Recommendations/Recommendations"),
  loading: Spinner
});

const SearchPage = Loadable({
  loader: () => import("./Pages/Search/Search"),
  loading: Spinner
});

const AdvancedSearch = Loadable({
  loader: () => import("./Pages/AdvancedSearch/AdvancedSearch"),
  loading: Spinner
});

export const UserProfile = Loadable({
  loader: () => import("./Pages/UserProfile/UserProfile"),
  loading: Spinner
});

export const prefix = "/";

export default Object.freeze({
  [prefix]: { module: MainPage, isExaxt: true },
  [prefix + "artist/:id"]: { module: ArtistPage, isExaxt: false },
  [prefix + "album/:id"]: { module: AlbumPage, isExaxt: false },
  [prefix + "articles"]: { module: ArticlesPage, isExaxt: false },
  [prefix + "article/:id"]: { module: ArticlePage, isExaxt: false },
  [prefix + "recommendations"]: { module: RecommendationsPage, isExaxt: false },
  [prefix + "search"]: { module: SearchPage, isExaxt: false },
  [prefix + "advanced-search"]: { module: AdvancedSearch, isExaxt: false }
});
