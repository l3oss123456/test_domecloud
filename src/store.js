import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
// import asyncReducer from "./reducers";
import rootReducer from "./reducers/index";

// const store = createStore(asyncReducer, applyMiddleware(thunk));
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
