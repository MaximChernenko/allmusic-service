import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// routes
import routes, { prefix, UserProfile } from "./routes";
// redux
// Artists
import { getArtists } from "./Pages/Artist/duck/operations";
// Albums
import { getAlbums } from "./Pages/Album/duck/operations";
// Songs
import { getSongs } from "./Pages/Artist/ArtistSongs/duck/operations";
// Articles
import { getArticles } from "./Pages/Article/duck/operations";
// userRatings
import userOperations from "./Pages/Album/AlbumUserReviews/duck/operations";
// session
import operations from "./store/session/operations";
// userSettings
import userSettOperations from "./Pages/UserProfile/duck/operations";
import sessionSelectors from "./store/session/selectors";

// utils
import ProtectedRoute from "./utils/helpers/ProtectedRoute";
// Components
import Header from "@components/Header/HeaderView";
import Footer from "@components/Footer/Footer";
import SignInForm from "./Pages/Auth/SignIn/SignIn";
import SignUpForm from "./Pages/Auth/SignUp/SignUp";

// styles
import s from "./app.module.css";

class App extends Component {
  state = {
    signInForm: false,
    signUpForm: false
  };
  componentDidMount() {
    const {
      getArtists,
      getAlbums,
      getSongs,
      getArticles,
      getUserRatings,
      getUserComments,
      getCurrentUser,
      getAllUserSett
    } = this.props;
    getCurrentUser();
    getArtists();
    getAlbums();
    getSongs();
    getArticles();
    getUserRatings();
    getUserComments();
    getAllUserSett();
  }

  componentDidUpdate() {
    const { location, history, user } = this.props;
    if (user) {
      const from = location.state && location.state.from;
      if (from) history.replace(from);
    }
  }

  openSignInForm = () => {
    this.setState({
      signInForm: true
    });
  };

  closeSignInForm = () => {
    this.setState({
      signInForm: false
    });
  };

  openSignUpForm = () => {
    this.setState({
      signUpForm: true
    });
  };

  closeSignUpForm = () => {
    this.setState({
      signUpForm: false
    });
  };

  render() {
    const { signInForm, signUpForm } = this.state;
    return (
      <div>
        <Header
          openSignInForm={this.openSignInForm}
          openSignUpForm={this.openSignUpForm}
        />
        <div className={s.inner}>
          <Switch>
            {Object.entries(routes).map(([path, { module, isExaxt }]) => (
              <Route
                key={path}
                path={path}
                exact={isExaxt}
                component={module}
              />
            ))}
            <ProtectedRoute
              path={prefix + "user-profile"}
              component={UserProfile}
            />
            <Redirect to={prefix} />
          </Switch>
        </div>
        <Footer />
        {signInForm && <SignInForm closeSignInForm={this.closeSignInForm} />}
        {signUpForm && <SignUpForm closeSignUpForm={this.closeSignUpForm} />}
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: sessionSelectors.getUser(state) });

const mapDispatchToProps = {
  getArtists,
  getAlbums,
  getSongs,
  getArticles,
  getUserRatings: userOperations.getUserRatings,
  getUserComments: userOperations.getUserComments,
  getCurrentUser: operations.refreshCurrentUser,
  getAllUserSett: userSettOperations.getAllUserSett
};

export default hot(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
