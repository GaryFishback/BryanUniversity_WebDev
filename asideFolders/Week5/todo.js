// console.log(typeof new Date().toString());
// console.log(Date.now());

// if (1 === "1") {
//   console.log("strict");
// } else if (1 == "1") {
//   console.log("loose");
// } else {
//   console.log("not equal at all");
// }
// Conversion:
// checkIt = 1 === "1" && 1 == "1" ? "strict" : "loose"; //btw, ternaries don't need to be stored in a variable. that is optional.
// //^^ THIS is equal to THIS =>
// if (1 == "1" && 1 === "1") {
//   console.log("strict");
// } else {
//   console.log("loose");
// }
// console.log(checkIt);

"1" === 1
  ? console.log("strict")
  : 1 == "1"
  ? console.log("abstract")
  : console.log("not equal at all");
