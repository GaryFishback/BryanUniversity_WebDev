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

export default function counterReducer(counter = 0, action) {
  switch (action.type) {
    case "DELETE_ONE":
      return counter - 1;
    case "COUNTER":
      return counter + 1;
    default:
      return counter;
  }
}
