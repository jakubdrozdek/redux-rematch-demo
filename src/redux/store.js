// redux/store.js
import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// Create root reducer
import counterReducer from "./counter";

const rootReducer = combineReducers({
  counter: counterReducer
});

// Plug in middleware for Dev Tools
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const middleware = composeEnhancers(applyMiddleware(thunk));

// Create store
const store = createStore(rootReducer, middleware);

export default store;
