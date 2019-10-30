/*Your goal is to take an array of javascript strings and turn them into a list of h1 elements on the DOM.  
You are going to do this incrementally following these steps:
Create an h1 tag with the text “Hello World”, and append it to the DOM 
Using a for-loop, repeat this process 10 times so that 10 h1’s with the text “Hello World” show up when the website is visited. 
Copy this array above your for-loop:
const names = [“steve”, “larry”, “joe”, “shirley”, “steph”, “nate”, “rick”, “emily”]
Adjust your for-loop to now loop through the length of the array. 
You should now see 8 “Hello World” h1s show up when the page loads.
Instead of using “Hello World” as the text, swap it for the current name in the array so that all of the names now list out on the website.
Add styles to the h1’s.*/

/*var h1 = document.createElement("h1");
h1.textContent = "Hello World";
document.body.append(h1);*/

/*for (var i = 0; i < 10; i++) {
    var newh1 = document.createElement("h1");
    newh1.textContent = "Hello World";
    document.body.append(newh1);
}*/

//adjusting array

const names = ["steve", "larry", "joe", "shirley", "steph", "nate", "rick", "emily"];
for (var i = 0; i < names.length; i++) {
    var h1 = document.createElement("h1");
    h1.textContent = names[i];
    document.body.append(h1);
    h1.style.textTransform = "capitalize";
    h1.style.textDecoration = "underline";
    h1.style.fontFamily = "Georgia, serif";
    h1.style.fontWeight = "1";
    (i == 0 ? h1.style.color = "red" :
        i == 1 ? h1.style.color = "orange" :
        i == 2 ? h1.style.color = "green" :
        i == 3 ? h1.style.color = "blue" :
        i == 4 ? h1.style.color = "purple" :
        i == 5 ? h1.style.color = "yellow" :
        i == 6 ? h1.style.color = "brown" :
        i == 7 ? h1.style.color = "teal" :
        h1.style.color = "black");
}
//Adjust your for-loop to now loop through the length of the array.
//Instead of using “Hello World” as the text, swap it for the current name in the array so that all of the names now list out on the website.
//Add styles to the h1’s.