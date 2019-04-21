import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import MainPage from "./Pages/Main/Main";
import Header from "./Components/Header/HeaderView";

// styles
import s from "./app.module.css";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className={s.inner}>
          <Switch>
            <Route path="/" component={MainPage} />
            <Redirect to="/" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
