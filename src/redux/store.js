import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import modal from "./reducers/modal";

export const reducers = combineReducers({
  modal,
});

const loggerMiddleware = (store) => (next) => (action) => {
  //console.log("Action type:", action.type);
  //alert("Action type:" + action.type);
  //console.log(action);
  //console.log("Action payload:", action.payload);
  //console.log("State before:", store.getState());
  //alert(JSON.stringify(store.getState()))
  next(action);
  //console.log("State after:", store.getState());
};

export function configureStore(initialState = {}) {
  const store = createStore(
    reducers,
    initialState,
    compose(applyMiddleware(loggerMiddleware))
  );
  return store;
}

export const store = configureStore();
