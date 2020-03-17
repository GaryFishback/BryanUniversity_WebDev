export function loading(data) {
  return {
    type: "LOADING",
    data: data
  };
}

export function addOne(data) {
  return {
    type: "ADD_ONE",
    data: data
  };
}

export default function loadReducer(array = [], action) {
  switch (action.type) {
    case "LOADING":
      return action.data;
    case "ADD_ONE":
      console.log(action.data);
      return [...array, action.data];
    default:
      return array;
  }
}
