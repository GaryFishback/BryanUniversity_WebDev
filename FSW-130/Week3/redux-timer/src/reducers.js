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
        stopped: false, //it will run assiming that stopped is false. 
        hours:
          state.hours < 60
            ? state.hours < 60 && state.minutes > 59 // one hour after 60 minutes
              ? state.hours + 1
              : state.hours
            : 0,
        minutes:
          state.minutes < 60
            ? state.minutes < 60 && state.seconds > 59 // one minute after 60 seconds
              ? state.minutes + 1
              : state.minutes
            : 0,
        seconds:
          state.seconds < 60
            ? state.seconds < 60 && state.miliseconds > 999 //one seccond per 1000 miliseconds
              ? state.seconds + 1
              : state.seconds
            : 0,
        miliseconds: state.miliseconds < 1000 ? state.miliseconds + 1 : 0, //it adds one miliseconds per milisecond
        laps: state.laps,
        interval: state.interval //start will not affect interval or laps. 
      };
    case STOP:
      return { //the only thing STOP changes is stopped. it sets stopped to true. which impede START to be fired. 
        miliseconds: state.miliseconds,
        hours: state.hours,
        minutes: state.minutes,
        seconds: state.seconds,
        stopped: true,
        laps: state.laps,
        interval: state.interval
      };
    case REPLAY: //replay is triggered by the START button before even considering if stopped is been stopped .
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
      return { //reset sets everything to the same as initial state; except that stopped here is true instead of false. 
        hours: 0,
        minutes: 0,
        seconds: 0,
        miliseconds: 0,
        stopped: true,
        laps: state.laps,
        interval: ""
      };
    case LAP:
      return { //lap only changes the laps array state. It will concat an array containing a string of the current time when the button was pressed to the previous array. 
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
