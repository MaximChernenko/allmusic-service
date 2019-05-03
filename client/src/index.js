import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// store
import { store, persistor } from "./store/store";

// styles
import "normalize.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Route component={App} />
      </BrowserRouter>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
