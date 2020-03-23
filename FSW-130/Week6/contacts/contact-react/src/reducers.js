import { addOne, deleteOne, countingContacts } from "./actions";
const initialState = {
  color: [
    {
      color: "#A3E8FF",
      name: "Lissa Herilliumme",
      phone: "786-567-5625",
      email: "lissaherilliumme@yahoo.com",
      img:
        "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-130/Week4/contact-list/src/imgs/download.png"
    },
    {
      color: "aquamarine",
      name: "Lissa Herilliumme",
      phone: "786-567-5625",
      email: "lissaherilliumme@yahoo.com",
      img:
        "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-130/Week4/contact-list/src/imgs/download.png"
    },
    {
      color: "#B2FF66",
      name: "Lissa Herilliumme",
      phone: "786-567-5625",
      email: "lissaherilliumme@yahoo.com",
      img:
        "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-130/Week4/contact-list/src/imgs/download.png"
    },
    {
      color: "#FFFF75",
      name: "Lissa Herilliumme",
      phone: "786-567-5625",
      email: "lissaherilliumme@yahoo.com",
      img:
        "https://raw.githubusercontent.com/GiselleMartinez006/BryanUniversity_WebDev/master/FSW-130/Week4/contact-list/src/imgs/download.png"
    }
    // "#A3E8FF", //fresh air
    // "aquamarine",
    // "#B2FF66" //"inchworm",
    // "#FFFF75", //"unmellow yellow",
    // "#F9E3D1", //champagne"
    // "#FFA8A8", //salmon pink
    // "#FFB5E8", //light hot pink
    // "#D9A8FF", //mauve
    // "#B2C6FF", //pale cornflower blue
    // "#A3E8FF", //fresh air
    // "aquamarine"
    // "#B2FF66", //"inchworm",
    // "#FFFF75", //"unmellow yellow",
    // "#F9E3D1", //champagne"
    // "#FFA8A8", //salmon pink
    // "#FFB5E8", //light hot pink
    // "#D9A8FF", //mauve
    // "#B2C6FF" //pale cornflower blue
  ],
  colorList: [
    "#A3E8FF", //fresh air
    "aquamarine",
    "#B2FF66", //"inchworm",
    "#FFFF75", //"unmellow yellow",
    "#F9E3D1", //champagne"
    "#FFA8A8", //salmon pink
    "#FFB5E8", //light hot pink
    "#D9A8FF", //mauve
    "#B2C6FF", //pale cornflower blue
    "#A3E8FF", //fresh air
    "aquamarine",
    "#B2FF66", //"inchworm",
    "#FFFF75", //"unmellow yellow",
    "#F9E3D1", //champagne"
    "#FFA8A8", //salmon pink
    "#FFB5E8", //light hot pink
    "#D9A8FF", //mauve
    "#B2C6FF" //pale cornflower blue
  ],
  counter: 0,

  newRGA: "",
  email: "",
  name: "",
  phone: "",
  photoUrl: ""
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ONE":
      return {
        ...state,
        color: [...state.color, action.data]
      };
    case "DELETE_ONE":
      state.color.splice(action.id, 1);
      return {
        ...state,
        counter: state.counter - 1
      };
    case "COUNTER":
      return {
        ...state,
        counter: state.counter + 1
      };
    case "NAME_INPUT":
      return {
        ...state,
        name: action.input
      };
    case "EMAIL_INPUT":
      return {
        ...state,
        email: action.input
      };
    case "COLOR_INPUT":
      return {
        ...state,
        newRGA: action.rga
      };
    case "PHONE_INPUT":
      return {
        ...state,
        phone: action.input
      };
    case "IMG_URL_INPUT":
      return {
        ...state,
        photoUrl: action.input
      };

    default:
      return state;
  }
}

export default reducer;
