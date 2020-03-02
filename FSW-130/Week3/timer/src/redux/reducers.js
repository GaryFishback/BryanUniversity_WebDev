import { start, stop, reset, toLap } from "./actioncreator";
const initialState = {
  hours: 0,
  minutes: 0,
  seconds: 0,
  miliseconds: 0,
  stopped: false,
  laps: [],
  interval: ""
};

function reducer(state = initialState, action) {
  // return new state based on the incoming action.type

  switch (action.type) {
    case "START":
      return {
        stopped: false,
        interval: ""
      };
    case "STOP":
      return {
        stopped: true
      };
    case "RESET":
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        stopped: true
      };

    default:
      return state;
  }
}

export default reducer;
