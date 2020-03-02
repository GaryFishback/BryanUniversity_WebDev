import { START, STOP, RESET, TO_LAP } from "./actionTypes";
const start = () => {
  return {
    type: START
  };
};
const stop = () => {
  return {
    type: STOP
  };
};
const reset = () => {
  return {
    type: RESET
  };
};
const toLap = () => {
  return {
    type: TO_LAP
  };
};
export { start, stop, reset, toLap };
