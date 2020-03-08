var createStore = require("./node_modules/redux/src/createStore");
var reducer = require("./reducers");
const store = createStore(reducer);
module.exports = store;
//this is where the store is created.
