const section = document.createElement("section");
document.body.append(section);
const peopleList = document.createElement("button");
peopleList.textContent = "Create Person";
peopleList.addEventListener("click", () => {
  const sectionPerson = document.createElement("section");
  document.body.append(sectionPerson);
  const h1 = document.createElement("h1");
  h1.textContent = "It takes a while to load...";
  sectionPerson.append(h1);
  axios.get("https://swapi.co/api/people").then(response => {
    var data = response.data.results;
    showData = data => {
      for (i = 0; i < 10; i++) {
        const pPerson = document.createElement("p");
        // const p2 = document.createElement("p");
        pPerson.textContent = i + 1 + ") Person Name: " + data[i].name;
        // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
        sectionPerson.append(pPerson);
      }
    };
    showData(data);
  });
});
section.append(peopleList);

const peopleListRemover = document.createElement("button");
peopleListRemover.textContent = "Remove People";
peopleListRemover.addEventListener("click", () => {
  document.body.removeChild(document.getElementsByTagName("section")[1]);
  //   document.body.removeChild(document.getElementsByTagName("h1")[1]);
});
section.append(peopleListRemover);
