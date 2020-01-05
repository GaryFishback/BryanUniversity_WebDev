const planetsList = document.createElement("button");
planetsList.textContent = "Create Planet List";
planetsList.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  // method  // url                     // async?
  xhr.open("GET", "https://swapi.co/api/planets", true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const JSONdata = xhr.responseText;
      const data = JSON.parse(JSONdata);
      console.log(data.results);
      showData(data.results);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.log(xhr.responseText);
    }
  };
  const h1 = document.createElement("h1");
  h1.textContent = "It takes a while to load...";
  document.body.append(h1);
  showData = data => {
    const section = document.createElement("section");
    document.body.append(section);
    for (i = 0; i < data.length; i++) {
      const p1 = document.createElement("p");
      // const p2 = document.createElement("p");
      p1.textContent = i + ") Planet Name: " + data[i].name;
      // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
      section.append(p1);
    }
  };
});
document.body.append(planetsList);

const planetsListRemover = document.createElement("button");
planetsListRemover.textContent = "Remove Planet List";
planetsListRemover.addEventListener("click", () => {
  document.body.removeChild(document.getElementsByTagName("section")[0]);
  document.body.removeChild(document.getElementsByTagName("h1")[0]);
});
document.body.append(planetsListRemover);
