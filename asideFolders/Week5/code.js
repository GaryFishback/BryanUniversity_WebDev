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
axios
  .get("https://swapi.co/api/people/1")
  .then((response) => {
    const h1 = document.createElement("h1");
    h1.textContent = "Name: " + response.data.name;
    document.body.append(h1);
    const h2 = document.createElement("h2");
    h2.textContent = "Skin Color: " + response.data.skin_color;
    document.body.append(h2);
    const h3 = document.createElement("h3");
    h3.textContent = "Eye Color: " + response.data.eye_color;
    document.body.append(h3);
    const h4 = document.createElement("h4");
    h4.textContent = "Hair Color: " + response.data.hair_color;
    document.body.append(h4);
    axios.get(response.data.species).then((response) => {
      const h1 = document.createElement("h1");
      h1.textContent = "Species: " + response.data.name;
      document.body.append(h1);
      const h2 = document.createElement("h2");
      h2.textContent = "Classification: " + response.data.classification;
      document.body.append(h2);
      const h3 = document.createElement("h3");
      h3.textContent = "Average Hair Color: " + response.data.hair_colors;
      document.body.append(h3);
      const h4 = document.createElement("h4");
      h4.textContent = "Average Lifespan: " + response.data.average_lifespan;
      document.body.append(h4);
    });
    console.log(response.data);
    axios.get(response.data.homeworld).then((response) => {
      console.log(response.data);
    });
  })
  .catch((error) => console.log(error));
document.body.style.backgroundColor = "grey";

var blue = document.createElement("h1");
blue.textContent = "blue";
document.body.append(blue);
