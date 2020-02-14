// var shopper = {
//   Shopper ="casey",
//    Age = 24,
//    FoodColor: all,
//   LikesToShop: false,
// };
  // var fruit = ["apple", "strawberry", "peach"] ;
  // concat("apple","strawberry", "peach")

// let 
// const 
//= 
// ==
// === 
// > < <= >= 

// var string = 5 + "5";
// console.log(string)

// var shopper = {
//   "Shopper Object" :"casey",
//    Age : 24,
//    FoodColor: [0, "strawberry", "peach"],
//   LikesToShop: false,
//   varShopper: function () {

//   }
// };

// function varShopper (){

// }
//   var fruit = ["apple", "strawberry", "peach"]
//   // concat("apple","strawberry", "peach")

//ctrl + D 
//command + D


var shopper = {
  Shopper :"casey",
  Age : 24,
  FoodColor: ['apple', 'strawberry', "peach"],
  LikesToShop: false,
  varshopper: function (){

  }
};
  var fruit = ["apple", "strawberry", "peach"]
  var apple = "apple"
  var pinnaple = "pinnacle"
  // concat("apple","strawberry", "peach")

 console.log(shopper)


























// function capitalizeAndLowercase(string) {
//   return string.toUpperCase() + string.toLowerCase();
// }
// console.log(capitalizeAndLowercase("Hello")); // => "HELLOhello"

// var findMiddleIndex = "Hello World";
// function halfLength(string) {
//   return Math.floor(string.length / 2);
// }
// console.log(halfLength(findMiddleIndex)); ////  WAS: console.log(halfLength());

// function nameOfFunction(parameter) {
//   return console.log(parameter);
// }
// nameOfFunction("Hello");
// nameOfFunction(5);
// nameOfFunction([1, 2, 3]);

// const r = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zach", age: 19, voted: false }
// ];
// total = () => {
//   r.reduce((final, voters) => {
//     if (voters.voted) {
//       final++;
//       return console.log("youngVotes:" + final);
//     }
//   }, 0);
// };
// total();

// code formula for functionality, input, store, process, and output!
// const listArray = [];
// // //search local for array
// // // const searchLocal = localStorage.getItem("listArray");
// if (listArray !== null) {
//   console.log(listArray);
//   //   JSON.parse(listArray);
// } else {
//   console.log("Continue to work on these bugs");
// }
// const searchObj = {  //commented this out the rest didn't even find out. Is pretty much useless here.
//   searchArray: ""
// };
//filter through the array to grab the data //same goes for this. You didn't even call this function
// const filterArray = function(grabArray, objSearch) {
//   grabArray.filter(function(filterThrough) {
//     return filterThrough.todoTask
//       .toLowerCase()
//       .includes(objSearch.searchArray.toLowerCase());
//   });
// };
// This function is to create a html element and append the it to the page for each item added to array

// const render = function() {
//     //now we're talking. Here is where the magic happens
//     listArray.forEach(function(todoText) {
//       let createdEl = document.createElement("p");
//       createdEl.textContent = todoText.todoTask;
//       document.querySelector("#added-value").appendChild(createdEl);
//       let createButt = document.createElement("button");
//       createButt.textContent = "Complete";
//       //figure out why multiple buttons appear on the doc when clicking on add task
//       document.querySelector("#added-value").appendChild(createButt); // add .appendchild(createButt)
//     });
//     //when the button is pressed the button renders on the screen just like the text rendering
//     //  listArray.forEach(function (button){
//     // })
//   };
//   document.querySelector("#added-value").innerHTML = "";
//   /* when clicking the button the value entered in the input box should but pushed in the listArray and
//   added to the list on the html doc */
//   /*This function below is to add the value into the array and into local storage */
//   document.querySelector("#form").addEventListener("submit", function(e) {
//     e.preventDefault();
//     //pushes the input entered into the array
//     listArray.push({
//       todoTask: e.target.elements.todoList.value,
//       completed: false
//     });
//     // store the data in local storage //you don't have where to store the data here..
//     //   localStorage.setItem("Todo Array", JSON.stringify(listArray)); //JSON here again
//     e.target.elements.todoList.value = "";
//     render();
//   });

//i'm working with the matter down here- to make it cleaner

// const render = function() {
//   document.querySelector("#added-value").innerHTML = ""; //line from 113
//   listArray.forEach(function(todoText) {
//     //Here is where the magic happens

//     let createdEl = document.createElement("p");
//     createdEl.textContent = todoText;
//     document.querySelector("#added-value").appendChild(createdEl);
//     let createButt = document.createElement("button");
//     createButt.textContent = "Complete";
//     //figure out why multiple buttons appear on the doc when clicking on add task - i'll answer that later, cause you have to see it.
//     document.querySelector("#added-value").appendChild(createButt);

//     createButt.addEventListener("click", () => {
//       document.querySelector("#added-value").innerHTML = "";
//     });
//     console.log(listArray);
//   });
// };
// // document.querySelector("#added-value").innerHTML = ""; //this line has no purpose here, you want it on line 103

// document.querySelector("#form").addEventListener("submit", function(e) {
//   e.preventDefault();
//   listArray.push(
//     e.target.todoList.value //,
//     // completed: false
//   );
//   /*store the data in local storage => you don't have where to store the data here... save all of this for when working with apis and servers.
//   As it is- we will be using AXIOS for apis. (FSW-105) Axios takes care of json.stringify and json.parse on its own. */
//   //   localStorage.setItem("Todo Array", JSON.stringify(listArray)); //JSON here again
//   e.target.todoList.value = "";
//   render();
// });

// var object = {
//   blue: "Maria",
//   ver: 5345634,
//   red: true
// };
// console.log(object);
// console.log(String(object));
// var h1 = document.createElement("h1");
// document.body.append(h1);
// h1.innerHTML = Object.entries(object);
