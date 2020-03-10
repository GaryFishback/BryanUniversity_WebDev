function addOne(contact) {
  return {
    type: "ADD_ONE",
    data: contact
  };
}

function deleteOne(id) {
  return {
    type: "DELETE_ONE",
    data: id
  };
}
function countingContacts() {
  return {
    type: "COUNTER"
  };
}
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
  changing: "blue",
  counter: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_ONE":
      return {
        color: [...state.color, action.data],
        changing: "green",
        newContact: action.data,
        counter: state.counter
      };
    case "DELETE_ONE":
      state.color.splice(action.data - 1, 1);
      return {
        color: state.color,
        changing: "black",
        newContact: state.newContact,
        counter: state.counter - 1
      };
    case "COUNTER":
      return {
        color: state.color,
        changing: "red",
        newContact: state.newContact,
        counter: state.counter + 1
      };

    default:
      return state;
  }
}

const store = Redux.createStore(reducer);

var state = store.getState();
state.color.map(contact => {
  store.dispatch(countingContacts());

  creatingBoxes = (contact, num) => {
    var contactList = document.getElementById("contact-list");
    var contactDiv = document.createElement("div");
    contactList.append(contactDiv);

    contactDiv.id = num;
    contactDiv.className = "box" + num;
    contactDiv.style.backgroundColor = contact.color;
    contactDiv.style.width = "25em";
    contactDiv.style.height = "25em";
    contactDiv.style.paddingLeft = "5em";
    contactDiv.style.paddingTop = "2.5em";
    contactDiv.style.paddingBottom = "2.5em";
    contactDiv.style.borderRadius = "100px";

    var buttonAnchorDel = document.createElement("a");
    contactDiv.append(buttonAnchorDel);
    buttonAnchorDel.className = "button";
    buttonAnchorDel.style.width = "50px";
    buttonAnchorDel.style.height = "50px";
    buttonAnchorDel.style.margin = "10px";
    buttonAnchorDel.style.left = "15em";
    buttonAnchorDel.style.display = "inline-block";

    var buttonSpanDel = document.createElement("span");
    buttonAnchorDel.append(buttonSpanDel);
    buttonSpanDel.textContent = "DEL";
    buttonSpanDel.className = "button__text";
    buttonSpanDel.style.paddingTop = "17px";
    buttonSpanDel.id = num;

    buttonAnchorDel.addEventListener("click", e => {
      console.log(e.target.id);
      store.dispatch(deleteOne(e.target.id));
      console.log(store.getState());
      var div = document.getElementById(e.target.id);
      console.log(div);
      div.remove();
      console.log(div);
      var h2s = document.getElementsByClassName("changing-nums");
      console.log(h2s);
      for (let i = 0; i < h2s.length; i++) {
        h2s[i].textContent = "Contact #" + (i + 1);
      }
    });

    var h2 = document.createElement("h2");
    var h2Span = document.createElement("span");
    contactDiv.append(h2);
    h2.append(h2Span);
    h2.className = "changing-nums";
    h2.style.display = "inline-block";
    h2Span.textContent = "Contact #" + num;

    var h3Name = document.createElement("h3");
    var h3NameSpan = document.createElement("span");
    contactDiv.append(h3Name);
    h3Name.append(h3NameSpan);
    h3NameSpan.textContent = "Name: " + contact.name;

    var h3Phone = document.createElement("h3");
    var h3PhoneSpan = document.createElement("span");
    contactDiv.append(h3Phone);
    h3Phone.append(h3PhoneSpan);
    h3PhoneSpan.textContent = "Phone: " + contact.phone;

    var h3Email = document.createElement("h3");
    var h3EmailSpan = document.createElement("span");
    contactDiv.append(h3Email);
    h3Email.append(h3EmailSpan);
    h3EmailSpan.textContent = "Email: " + contact.email;

    var h3Photo = document.createElement("h3");
    var h3PhotoSpan = document.createElement("span");
    contactDiv.append(h3Photo);
    h3Photo.append(h3PhotoSpan);
    h3PhotoSpan.textContent = "Photo: ";
    var br = document.createElement("br");
    h3Photo.append(br);
    var h3Img = document.createElement("img");
    h3Photo.append(h3Img);
    h3Img.src = contact.img;
    h3Img.alt = "";
  };
  creatingBoxes(contact, store.getState().counter);
  console.log(store.getState());
});

var colorInput = document.getElementsByName("color")[0];
colorInput.addEventListener("keyup", e => {
  console.log(e.target.value);
  var form = document.getElementById("form");
  form.style.background = e.target.value;
  var targetBackground = window
    .getComputedStyle(e.target)
    ["background"].split("none")[0]
    .substr(4, 13)
    .split(")")[0]
    .split(", ");
  console.log(targetBackground[0]);
  console.log(targetBackground[1]);
  console.log(targetBackground[2]);

  var shadedColor = `rgba(${targetBackground[0]}, ${targetBackground[1]}, ${targetBackground[2]}, 0.5)`;
  console.log(shadedColor);

  colorInput.style.background = shadedColor;
  console.log(colorInput);
});

var submitButton = document.getElementById("submit");
console.log(submitButton);
submitButton.addEventListener("click", () => {
  var nameInput = document.getElementsByName("name")[0];
  var colorInput = document.getElementsByName("color")[0];
  var phoneInput = document.getElementsByName("phone")[0];
  var emailInput = document.getElementsByName("email")[0];
  var imgInput = document.getElementsByName("img")[0];

  var newContact = {
    name: nameInput.value,
    color: colorInput.value,
    phone: phoneInput.value,
    email: emailInput.value,
    img: imgInput.value
  };
  console.log(newContact);
  store.dispatch(countingContacts());
  store.dispatch(addOne(newContact));
  var newState = store.getState();
  console.log(newState);
  creatingBoxes(newState.color[newState.color.length - 1], newState.counter);
  //   store.dispatch(countingContacts());
});
