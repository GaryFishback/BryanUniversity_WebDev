import { START, STOP, REPLAY, RESET, LAP } from "./actions";
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
  switch (action.type) {
    case START:
      return {
        stopped: false,
        hours:
          state.hours < 60
            ? state.hours < 60 && state.minutes > 59
              ? state.hours + 1
              : state.hours
            : 0,
        minutes:
          state.minutes < 60
            ? state.minutes < 60 && state.seconds > 59
              ? state.minutes + 1
              : state.minutes
            : 0,
        seconds:
          state.seconds < 60
            ? state.seconds < 60 && state.miliseconds > 999
              ? state.seconds + 1
              : state.seconds
            : 0,
        miliseconds: state.miliseconds < 1000 ? state.miliseconds + 1 : 0,
        laps: state.laps,
        interval: state.interval
      };
    case STOP:
      return {
        miliseconds: state.miliseconds,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        stopped: true,
        laps: state.laps,
        interval: state.interval
      };
    case REPLAY:
      return {
        miliseconds: state.miliseconds,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        stopped: false,
        laps: state.laps,
        interval: state.interval
      };
    case RESET:
      return {
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        stopped: true,
        laps: state.laps,
        interval: ""
      };
    case LAP:
      return {
        miliseconds: state.miliseconds,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        stopped: state.stopped,
        laps: state.laps.concat([
          `${state.hours} : ${state.minutes} : ${state.seconds} :${state.miliseconds}`
        ]),
        interval: state.interval
      };
    default:
      return state;
  }
}
export default reducer;
