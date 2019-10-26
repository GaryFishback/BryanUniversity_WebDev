var nav = document.createElement("nav");
var navUl = document.createElement("ul");
var navUlArray = ["Home", "Page1", "Page2", "Contact"];

var linkArray = ["http://google.com", "https://www.w3schools.com/jsref/prop_style_liststyle.asp", "https://www.tutorialrepublic.com/javascript-tutorial/javascript-dom-styling.php", "https://www.w3schools.com/js/js_htmldom_css.asp"]

for (var i = 0; i < linkArray.length; i++) {
    var navUlLi = document.createElement("li");
    navUl.append(navUlLi);
    var a = document.createElement('a');
    navUlLi.appendChild(a);
    a.href = (linkArray[i]);
    a.textContent = (navUlArray[i]);
    navUlLi.style.padding = "25px";
    a.style.fontSize = "18px";
    a.style.color = "green";
    a.style.textDecoration = "none";
}
/*navUlArray.forEach(function(navButton) {    
        });  
  a.textContent = (navUlArray[i]);
  ol.append(li) //so this works too
    linkArray.forEach(function(links) {
    
    a.href = (links);
    a.textContent = (navButton);
*/

document.body.append(nav, navUl);



/*for(var i = 0; i < 20 ; i++){
    var li = document.createElement("li");
    li.textContent = (olArray.push([i]));
    ol.append(li) //so this works too
  }*/

/////////////////////////////////////////////////////////////////////// navEndHere