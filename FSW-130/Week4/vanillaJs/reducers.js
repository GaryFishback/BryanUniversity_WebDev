var { START } = require("./actions");
const initialState = {
  colors: [
    "#A3E8FF", //fresh air
    "aquamarine",
    "#B2FF66" //"inchworm",
    // "#FFFF75", //"unmellow yellow",
    // "#F9E3D1", //champagne"
    // "#FFA8A8", //salmon pink
    // "#FFB5E8", //light hot pink
    // "#D9A8FF", //mauve
    // "#B2C6FF", //pale cornflower blue
    // "#A3E8FF", //fresh air
    // "aquamarine"
    // "#B2FF66", //"inchworm",
    // "#FFFF75", //"unmellow yellow",
    // "#F9E3D1", //champagne"
    // "#FFA8A8", //salmon pink
    // "#FFB5E8", //light hot pink
    // "#D9A8FF", //mauve
    // "#B2C6FF" //pale cornflower blue
  ]
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {};
    case STOP:
      return {
        //the only thing STOP changes is stopped. it sets stopped to true. which impede START to be fired.
        miliseconds: state.miliseconds
      };

    default:
      return state;
  }
}
module.exports = reducer;
