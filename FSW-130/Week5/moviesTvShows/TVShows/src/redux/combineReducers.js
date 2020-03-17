import redux from "redux";
import { combineReducers, createStore } from "redux";

import loadReducer from "./loadingAddReducer";
import countingAndDelete from "./counterAndDelete";
// console.log(loadReducer);
const rootReducer = combineReducers({
  loadingAdding: loadReducer,
  countingDelete: countingAndDelete
});
const store = createStore(rootReducer);
store.subscribe(() => {
  //   console.log(store.getState());
});
export default store;
