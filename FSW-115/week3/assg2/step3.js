const xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/[your_name]/todo", true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data);
    // showData(data.results);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.responseText);
  }
};
// showData = data => {
//     const section = document.createElement("section");
//     document.body.append(section);
//     for (i = 0; i < data.length; i++) {
//       const p1 = document.createElement("p");
//       // const p2 = document.createElement("p");
//       p1.textContent = i + ") Planet Name: " + data[i].name;
//       // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
//       section.append(p1);
//     }
//   };
