import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
// redux
import sessionSelectors from "../../store/session/selectors";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(sessionSelectors.isAuthenticated);

  return (
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
};

export default ProtectedRoute;
