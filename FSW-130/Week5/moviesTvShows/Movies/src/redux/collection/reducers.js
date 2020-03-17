export default function reducer(state = moviesState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        array: action.data,
        changing: "green",
        newObject: action.data,
        counter: state.counter
      };
    case "ADD_ONE":
      console.log(action);
      return {
        array: [...state.array, action.data],
        changing: "green",
        newObject: action.data,
        counter: state.counter
      };
    case "DELETE_ONE":
      return {
        array: [...state.array],
        changing: "black",
        newObject: state.newObject,
        counter: state.counter - 1
      };
    case "COUNTER":
      return {
        array: [...state.array],
        changing: "red",
        newObject: state.newObject,
        counter: state.counter + 1
      };

    default:
      return state;
  }
}
