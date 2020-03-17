export function counting() {
  return {
    type: "COUNTER"
  };
}
export function deleteOne(id) {
  return {
    type: "DELETE_ONE",
    data: id
  };
}

export default function counterReducer(counter, action) {
  switch (action.type) {
    case "DELETE_ONE":
      return {
        changing: "black",
        counter: counter - 1
      };
    case "COUNTER":
      return {
        changing: "red",
        counter: counter + 1
      };
  }
}
