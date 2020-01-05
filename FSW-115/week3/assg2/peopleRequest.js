const peopleList = document.createElement("button");
peopleList.textContent = "Create Person";
peopleList.addEventListener("click", () => {
  const personObjectXHR = new XMLHttpRequest();
  // method  // url                     // async?
  personObjectXHR.open("GET", "https://swapi.co/api/people", true);
  personObjectXHR.send();

  personObjectXHR.onreadystatechange = function() {
    if (personObjectXHR.readyState === 4 && personObjectXHR.status === 200) {
      const JSONdata = personObjectXHR.responseText;
      const dataPeople = JSON.parse(JSONdata);
      console.log(dataPeople.results);
      showData(dataPeople.results);
    } else if (
      personObjectXHR.readyState === 4 &&
      personObjectXHR.status !== 200
    ) {
      console.log(personObjectXHR.responseText);
    }
  };
  showData = data => {
    const sectionPerson = document.createElement("section");
    document.body.append(sectionPerson);
    const pPerson = document.createElement("p");
    // const p2 = document.createElement("p");
    pPerson.textContent = 5 + ") Person Name: " + data[5].name;
    // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
    sectionPerson.append(pPerson);
  };
});
document.body.append(peopleList);

const peopleListRemover = document.createElement("button");
peopleListRemover.textContent = "Remove People";
peopleListRemover.addEventListener("click", () => {
  document.body.removeChild(document.getElementsByTagName("section")[0]);
  //   document.body.removeChild(document.getElementsByTagName("h1")[0]);
});
document.body.append(peopleListRemover);
