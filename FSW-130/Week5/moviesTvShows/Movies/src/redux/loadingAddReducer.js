export function loading(data) {
  return {
    type: "LOADING",
    data: data
  };
}

export function addOne(object) {
  return {
    type: "ADD_ONE",
    data: object
  };
}

export default function loadReducer(array = [], action) {
  switch (action.type) {
    case "LOADING":
      return {
        array: [action.data],
        changing: "green"
      };
    case "ADD_ONE":
      console.log(action);
      return {
        array: [...array, action.data],
        changing: "blue"
      };
  }
}
