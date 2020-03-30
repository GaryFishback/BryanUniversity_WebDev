const initialState = {
  tweetsArray: [],
  tweet: [],
  pressed: false,
  counter: 0,
  newRGA: "",
  email: "",
  clicked: false,
  id: 0,
  name: "",
  phone: "",
  photoUrl: ""
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ONE":
      return {
        ...state,
        tweetsArray: [...state.tweetsArray, action.data]
      };
    case "DELETE_ONE":
      const index = state.tweetsArray.findIndex(tweet => {
        // console.log(tweet);
        return tweet._id === action.id;
      });
      state.tweetsArray.splice(index, 1);
      console.log(state.tweetsArray);
      return {
        ...state
      };
    case "UPDATE_ONE":
      const tweet = state.tweetsArray.findIndex(tweet => {
        // console.log(tweet);
        return tweet._id === action.data._id;
      });

      console.log(tweet);
      const updatedtweet = Object.assign(state.tweetsArray[tweet], action.data);
      console.log(updatedtweet);
      return {
        ...state
      };
    case "FIRST_LINK":
      return {
        ...state,
        clicked: true
      };
    case "INPUT1":
      return {
        ...state,
        name: action.input
      };
    case "INPUT2":
      return {
        ...state,
        email: action.input
      };
    case "INPUT3":
      return {
        ...state,
        newRGA: action.rga
      };
    case "INPUT4":
      return {
        ...state,
        phone: action.input
      };
    case "INPUT5":
      return {
        ...state,
        photoUrl: action.input
      };
    case "SAVE_DATA":
      return {
        ...state,
        tweetsArray: action.data
      };
    case "SAVE_ID":
      return {
        ...state,
        id: action.data,
        pressed: true
      };
    case "SAVE_TWEET":
      return {
        ...state,
        pressed: false,
        tweet: [action.data]
      };
    default:
      return state;
  }
}

export default reducer;
