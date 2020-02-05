async function getAllLukeMovies() {
  const lukeData = await axios.get("https://swapi.co/api/people/1");
  const keys = Object.keys(lukeData.data);
  console.log(lukeData.data);
  console.log(keys);
  const lukeh1 = document.createElement("h1");
  lukeh1.textContent = `${capitalizeFirstLetter(keys[0])}: ${
    lukeData.data.name
  }`;
  document.body.appendChild(lukeh1);
  lukeh1.addEventListener("mousedown", async e => {
    e.preventDefault();
    const aetheticsSection = document.createElement("section");
    aetheticsSection.className = "aetheticsSection";
    document.body.appendChild(aetheticsSection);
    aestheticsArray = [];
    aestheticsArray.push(
      lukeData.data.name,
      lukeData.data.height,
      lukeData.data.mass,
      lukeData.data.hair_color,
      lukeData.data.skin_color,
      lukeData.data.eye_color,
      lukeData.data.birth_year,
      lukeData.data.gender,
      lukeData.data.url
    );
    for (let i = 1; i < aestheticsArray.length; i++) {
      const aestheticsH2 = document.createElement("h2");
      aestheticsH2.textContent = `${
        aestheticsArray[i] === lukeData.data.url
          ? keys[15].toUpperCase()
          : keys[i].toUpperCase()
      }: ${aestheticsArray[i]}`;
      aetheticsSection.appendChild(aestheticsH2);
    }
    aetheticsSection.append();

    const lukeSpecieUrls = lukeData.data.species;
    console.log(lukeSpecieUrls);
    axios.get(lukeSpecieUrls[0]).then(response => {
      console.log(response.data.name);
      const speciesH2 = document.createElement("h2");
      speciesH2.textContent = `${keys[10].toUpperCase()}: ${
        response.data.name
      }`;
      aetheticsSection.append(speciesH2);
    });

    const lukeHomeWorldUrl = lukeData.data.homeworld;
    console.log(lukeHomeWorldUrl);
    axios.get(lukeHomeWorldUrl).then(response => {
      console.log(response.data.name);
      const homeworldH2 = document.createElement("h2");
      homeworldH2.textContent = `${capitalizeFirstLetter(keys[8])}: ${
        response.data.name
      }`;
      aetheticsSection.append(homeworldH2);
    });
    // const pendingSpeciePromises = [];
    const lukeFilmUrls = lukeData.data.films;
    const pendingFilmPromises = [];

    const lukeVehiclesUrls = lukeData.data.vehicles;
    const pendingVehiclesPromises = [];

    const lukeStarshipsUrls = lukeData.data.starships;
    const pendingStarshipsPromises = [];
    for (let i = 0; i < lukeFilmUrls.length; i++) {
      pendingFilmPromises.push(axios.get(lukeFilmUrls[i]));
    }
    for (let i = 0; i < lukeVehiclesUrls.length; i++) {
      pendingVehiclesPromises.push(axios.get(lukeVehiclesUrls[i]));
    }
    for (let i = 0; i < lukeStarshipsUrls.length; i++) {
      pendingStarshipsPromises.push(axios.get(lukeStarshipsUrls[i]));
    }
    const listsSection = document.createElement("section");
    listsSection.className = "listsSection";
    document.body.append(listsSection);
    Promise.all(pendingVehiclesPromises).then(response => {
      const loadingUl = document.createElement("ul");
      const div = document.createElement("div");
      // loadingUl.textContent = `${keys[11].toUpperCase()}: `;
      const h1 = document.createElement("h1");
      h1.textContent = `${capitalizeFirstLetter(keys[11])}: `;
      listsSection.append(div);
      div.append(h1, loadingUl);
      for (let i = 0; i < response.length; i++) {
        const li = document.createElement("h3");
        li.textContent = `${i + 1}- ${response[i].data.name}`;
        loadingUl.appendChild(li);
      }
    });
    Promise.all(pendingStarshipsPromises).then(response => {
      const loadingUl = document.createElement("ul");
      const div = document.createElement("div"); //   loadingUl.textContent = `${keys[12].toUpperCase()}: `;
      const h1 = document.createElement("h1");
      h1.textContent = `${capitalizeFirstLetter(keys[12])}: `;
      listsSection.append(div);
      div.append(h1, loadingUl);
      for (let i = 0; i < response.length; i++) {
        const li = document.createElement("h3");
        li.textContent = `${i + 1}- ${response[i].data.name}`;
        loadingUl.appendChild(li);
      }
    });
    Promise.all(pendingFilmPromises)
      .then(response => {
        const div = document.createElement("div");
        const loadingUl = document.createElement("ul");
        // loadingUl.textContent = `${keys[9].toUpperCase()}: `;
        const h1 = document.createElement("h1");
        h1.textContent = `${capitalizeFirstLetter(keys[9])}: `;
        listsSection.append(div);
        div.append(h1, loadingUl);
        for (let i = 0; i < response.length; i++) {
          const li = document.createElement("h3");
          li.textContent = `${i + 1}- ${response[i].data.title}`;
          loadingUl.appendChild(li);
        }
      })
      .catch(error => console.log(error));
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    document.body.append(deleteButton);
    deleteButton.addEventListener("click", e => {
      e.preventDefault();
      document.body.removeChild(listsSection);
      document.body.removeChild(aetheticsSection);
      document.body.removeChild(deleteButton);
    });
  });
}
getAllLukeMovies();

function capitalizeFirstLetter(string) {
  if (typeof string == undefined) return;
  var firstLetter = string[0] || string.charAt(0);
  return firstLetter ? firstLetter.toUpperCase() + string.substr(1) : "";
}
