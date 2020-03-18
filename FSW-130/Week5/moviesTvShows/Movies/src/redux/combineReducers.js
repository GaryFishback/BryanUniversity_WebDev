// import redux from "redux";
import { combineReducers, createStore } from redux;

import loadingAndAdding from "./loadingAddReducer";
import countingAndDelete from "./counterAndDelete";

const rootReducer = combineReducers({
   loadingAndAdding,
   countingAndDelete,
})
const store = createStore(rootReducer)
store.subscribe(() => {
    console.log(store.getState())
})
export default store