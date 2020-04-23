// {<IfStatement> <js>
// (PRELIMINARIES)
if (5 > 3) {
  console.log("IS FIVE GREATER THAN THREE");
}
var cat = "cat";
if (5 > cat.length) {
  console.log("IS THE LENGTH OF CAT");
}
var dog = "dog";
if (cat.length === dog.length) {
  console.log("CAT IS EQUAL TO DOG");
}
if (dog.length !== cat.length) console.log("CAT IS NOT EQUAL TO DOG");

// {BRONZE MEDAL}
var person = {
  name: "Bobby",
  age: 12,
};
console.log(person.age);
if (18 > person.age) {
  console.log("IF TWELVE IS GREATER THAN EIGHTEEN");
}
if (18 < person.age) {
  console.log("IF TWELVE IS LESS THAN EIGHTEEN");
}
// if(B>18){
//     console.log("IF B IS GREATER THAN EIGHTEEN")
//     }
// if(B===18){
//     console.log("IF B IS EQUAL TO EIGHTEEN")
// }
// {SILVER MEDAL}
if ("1" === 1) console.log("1" === 1);
console.log(1 === 1);
console.log("l" === "1");
// }
