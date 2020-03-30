export function saveData(array) {
  return {
    type: "SAVE_DATA",
    data: array
  };
}
export function saveID(id) {
  return {
    type: "SAVE_ID",
    data: id
  };
}
export function saveTweet(tweet) {
  return {
    type: "SAVE_TWEET",
    data: tweet
  };
}
export function addOne(tweet) {
  return {
    type: "ADD_ONE",
    data: tweet
  };
}
export function deleteOne(id) {
  return {
    type: "DELETE_ONE",
    id: id
  };
}
export function updateOne(newData) {
  return {
    type: "UPDATE_ONE",
    data: newData
  };
}
export function firstLink() {
  return {
    type: "FIRST_LINK"
  };
}
export function Input1(input) {
  return {
    type: "INPUT_1",
    input: input
  };
}
export function Input2(input) {
  return {
    type: "INPUT_2",
    input: input
  };
}
export function Input3(input) {
  return {
    type: "INPUT_3",
    input: input
  };
}
export function Input4(input) {
  return {
    type: "INPUT_4",
    input: input
  };
}
//
