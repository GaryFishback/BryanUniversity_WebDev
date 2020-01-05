console.log("pokemon");
// xhr.onreadystatechange
// xhr.readyState
// xhr.status
// xhr.responseText

// xhr.open()
// xhr.send()

// url: https://swapi.co/api/people/1

const xhr = new XMLHttpRequest();
// method  // url                     // async?
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const JSONdata = xhr.responseText;
    const data = JSON.parse(JSONdata);
    console.log(data.objects[0].pokemon);
    showData(data.objects[0]);
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log(xhr.responseText);
  }
};

showData = data => {
  for (i = 0; i < data.pokemon.length; i++) {
    const section = document.createElement("section");
    document.body.append(section);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = i + ") Name: " + data.pokemon[i].name;
    p2.textContent = "URI: " + data.pokemon[i].resource_uri;
    section.append(p1, p2);
  }
};
