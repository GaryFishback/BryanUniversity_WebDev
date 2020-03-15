export const addOne = contact => {
  return {
    type: "ADD_ONE",
    data: contact
  };
};

export const deleteOne = id => {
  return {
    type: "DELETE_ONE",
    data: id
  };
};
export const countingContacts = () => {
  return {
    type: "COUNTER"
  };
};
