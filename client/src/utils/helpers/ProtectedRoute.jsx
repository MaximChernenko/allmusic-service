import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// redux
import sessionSelectors from "../../store/session/selectors";

const ProtectedRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);
const mapStateToProps = state => ({
  isAuthenticated: sessionSelectors.isAuthenticated(state)
});

export default connect(mapStateToProps)(ProtectedRoute);
