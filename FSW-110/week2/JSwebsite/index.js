/*Website Requirements
a navbar with links (doesn’t need to work)
You will append created elements to the <body> tag of your HTML page to produce the entire site,
 so the only HTML tag you will add to your HTML page is the script tag.*/

/////////////////////////////////////////////////////////////////////// nav in the other file
var h1 = document.createElement("h1");
h1.textContent = "Welcome to my JS site";

var p = document.createElement("p");
p.textContent = "The links in the navbar work BUT they take to external web pages.";

document.body.append(h1, p);

var ol = document.createElement("ol");
ol.textContent = "List Items:";
document.body.append(ol);
var olArray = []
for (var i = 0; i < 20; i++) {
    var li = document.createElement("li");
    li.textContent = (olArray.push([i]));
    ol.append(li) //so this works too
}

var footer = document.createElement("footer");
var footerH1 = document.createElement("h1");
footerH1.textContent = "FooterHere";

document.body.append(footer, footerH1);