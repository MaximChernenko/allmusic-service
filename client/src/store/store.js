import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";
import rootReducer from "./rootReducer";

const middlewares = applyMiddleware(reduxThunk);
const enhancer = composeWithDevTools(middlewares);
const store = createStore(rootReducer, enhancer);
const persistor = persistStore(store);

export { store, persistor };
