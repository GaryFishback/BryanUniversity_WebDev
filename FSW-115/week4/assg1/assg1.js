const section = document.createElement("section");
document.body.append(section);
const planetsList = document.createElement("button");
planetsList.textContent = "Create Planet List";
planetsList.addEventListener("click", () => {
  const sectionData = document.createElement("section");
  document.body.append(sectionData);
  const h1 = document.createElement("h1");
  h1.textContent = "It takes a while to load...";
  sectionData.append(h1);
  axios.get("https://swapi.co/api/planets").then(response => {
    var data = response.data.results;
    showData = data => {
      for (i = 0; i < data.length; i++) {
        const p1 = document.createElement("p");
        // const p2 = document.createElement("p");
        p1.textContent = i + 1 + ") Planet Name: " + data[i].name;
        // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
        sectionData.append(p1);
      }
    };
    showData(data);
  });
});
section.append(planetsList);
const planetsListRemover = document.createElement("button");
planetsListRemover.textContent = "Remove Planet List";
planetsListRemover.addEventListener("click", () => {
  document.body.removeChild(document.getElementsByTagName("section")[1]);
  //   document.getElementsByTagName("section")[1].removeChild(document.getElementsByTagName("h1")[1]);
});
section.append(planetsListRemover);
