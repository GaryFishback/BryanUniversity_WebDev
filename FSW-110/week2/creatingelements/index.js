/*In the js file, create the following elements and append them to the DOM so they show up when the website is visited.
H1 with the text “Welcome to my JS site”
P with the text “All of this was created with Javascript”
An Ordered list (ol) with at least three items (li).
Each li should also display text.
Remember, you will need to first add the li’s to the ol before putting the ol on the DOM.*/
console.log (document);
var h1 = document.createElement("h1");
var p = document.createElement("p");

h1.textContent = "Welcome to my JS site";
p.textContent = "All of this was created with Javascript";

document.body.append(h1, p);

var ol = document.createElement("ol");
ol.textContent ="List Items:"; 
document.body.append(ol);

/*var li = document.createElement("li");
li.textContent = "Some text";

var li1 = document.createElement("li");
li1.textContent = "Some text";

var li2 = document.createElement("li");
li2.textContent = "Some text";

var li3 = document.createElement("li");
li3.textContent = "Some text";
ol.append(li, li1, li2, li3);*/

////////////////////////////////////////////////////////////////////

/*var olArray = [ 
  document.createElement("li"), 
  document.createElement("li"),
  document.createElement("li"), 
  document.createElement("li")]


olArray.forEach(function(element) {
  (element).textContent = "Some text";
  ol.append(element)
});*/

var olArray = [ "1","2","3","4", "and some more text"]


/*olArray.forEach(function(element) {
  var li = document.createElement("li");
  li.textContent = (element);
  ol.append(li)
});*/
for(var i = 0; i < olArray.length ; i++){
  var li = document.createElement("li");
  li.textContent = (olArray[i]);
  ol.append(li) //so this works too
}
