import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { superUserReducer } from "./reducers/superUserReducer";

const reducers = combineReducers({ superUser: superUserReducer });

export const store = createStore(reducers, compose(applyMiddleware(thunk)));
