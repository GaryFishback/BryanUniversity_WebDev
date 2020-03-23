export function addOne(contact) {
  return {
    type: "ADD_ONE",
    data: contact
  };
}
export function deleteOne(id) {
  return {
    type: "DELETE_ONE",
    id: id
  };
}
export function countingContacts() {
  return {
    type: "COUNTER"
  };
}
export function colorInput(rga) {
  return {
    type: "COLOR_INPUT",
    rga: rga
  };
}
export function nameInput(input) {
  return {
    type: "NAME_INPUT",
    input: input
  };
}
export function emailInput(input) {
  return {
    type: "EMAIL_INPUT",
    input: input
  };
}
export function phoneInput(input) {
  return {
    type: "PHONE_INPUT",
    input: input
  };
}
export function imgUrlInput(input) {
  return {
    type: "IMG_URL_INPUT",
    input: input
  };
}
//
