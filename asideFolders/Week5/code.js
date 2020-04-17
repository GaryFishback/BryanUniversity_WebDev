// function titleCase(str) {
//   var splitStr = str.toLowerCase().split(" ");
//   for (var i = 0; i < splitStr.length; i++) {
//     // You do not need to check if i is larger than splitStr length, as your for does that for you
//     // Assign it back to the array
//     splitStr[i] =
//       splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
//   }
//   // Directly return the joined string
//   return splitStr.join(" ");
// }
// console.log(titleCase("I'm a little tea pot"));
// var viewportwidth;
// var viewportheight;

// // the more standards compliant browsers (mozilla/netscape/opera/IE7) use window.innerWidth and window.innerHeight

// if (typeof window.innerWidth != "undefined") {
//   viewportwidth = window.innerWidth;

//   viewportheight = window.innerHeight;
//   console.log(viewportwidth);
//   console.log(viewportheight);
// }

// // IE6 in standards compliant mode (i.e. with a valid doctype as the first line in the document)
// else if (
//   typeof document.documentElement != "undefined" &&
//   typeof document.documentElement.clientWidth != "undefined" &&
//   document.documentElement.clientWidth != 0
// ) {
//   (viewportwidth = document.documentElement.clientWidth),
//     (viewportheight = document.documentElement.clientHeight);
//   console.log(viewportwidth);
//   console.log(viewportheight);
// }

// // older versions of IE
// else {
//   viewportwidth = document.getElementsByTagName("body")[0].clientWidth;
//   viewportheight = document.getElementsByTagName("body")[0].clientHeight;
//   console.log(viewportwidth);
//   console.log(viewportheight);
// }
// document.write(
//   "<p>Your viewport width is " + viewportwidth + "x" + viewportheight + "</p>"
// );
var changes = { name: "not a color", _id: 142341213 };
uglyThingsArray = [
  { name: "color", _id: 142341213 },
  { name: "color1", _id: 1452452353 },
  { name: "color2", _id: 14235235213 },
];
console.log(uglyThingsArray);
const index = uglyThingsArray.findIndex((parameter) => {
  console.log(parameter);
  return parameter._id === changes._id;
});
console.log(uglyThingsArray[index]);

const updateduglyThing = Object.assign(uglyThingsArray[index], changes);
console.log(updateduglyThing);

console.log(uglyThingsArray);

console.log(Object.assign(changes, { name: "blue" }));
