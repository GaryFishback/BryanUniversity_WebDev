/*In the JS file, create a list of elements on the DOM using what you learned in the previous assignment.  Give them whatever text you would like.
Then, adapt it to loop through an array of text instead and make it show up on the page.
Using the .style property, edit the element’s styles in your js to have:
Font-size: 20px
Font-weight: lighter
Font-family: sans-serif
Color: cornflowerblue*/

var ol = document.createElement("ol");
document.body.append(ol);
var textLi = ["one", "two", "three", "four", "five", "six", "seven", "eight"];
for (var i = 0; i < textLi.length; i++) {
    var li = document.createElement("li");
    li.textContent = "I am the list number " + textLi[i];
    ol.append(li);
    li.style.fontSize = "20px";
    li.style.fontWeight = "lighter";
    li.style.fontFamily = "sans-serif";
    li.style.color = "cornflowerblue";
    li.classList = "border";
}
/*Font-size: 20px
Font-weight: lighter
Font-family: sans-serif
Color: cornflowerblue

Back in your JS, add that class to the elements being created using classList*/


//Note to self: .toggle finds class name. If is there removes it, if is not adds it.