const planetsList = document.createElement("button");
planetsList.textContent = "Create Planet List";
planetsList.addEventListener("click", () => {
  const xhr = new XMLHttpRequest();
  // method  // url                     // async?
  xhr.open("GET", "https://api.vschool.io/gmtnezschez/todo/", true);
  xhr.send();

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const JSONdata = xhr.responseText;
      const data = JSON.parse(JSONdata);
      console.log(data);
      showData(data);
    } else if (xhr.readyState === 4 && xhr.status !== 200) {
      console.log(xhr.responseText);
    }
  };
  //   const h1 = document.createElement("h1");
  //   h1.textContent = "It takes a while to load...";
  //   document.body.append(h1);
  //   completedFunction = data => {
  //     data[i].completed === true
  //       ? console.log("completed") //(summary.style.color = "red")
  //       : console.log(data.completed);
  //   };

  showData = data => {
    const section = document.createElement("section");
    document.body.append(section);
    for (i = 0; i < data.length; i++) {
      let ifCompleted =
        data[i].completed === true
          ? true //(summary.style.color = "red")
          : false;
      console.log(ifCompleted);
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      const p1 = document.createElement("p");
      const img = document.createElement("img");
      p1.textContent = "$" + data[i].price;
      // const p2 = document.createElement("p");
      //   summaryText = "Todo " + (i + 1) + ": " + data[i].title;
      details.textContent = data[i].description;
      // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
      section.append(details);
      summaryText = "Todo " + (i + 1) + ": " + data[i].title;
      summary.textContent = summaryText;
      details.append(summary);
      img.src = data[i].imgUrl;
      details.append(img);
      img.style.display = "block";
      details.append(p1);

      const itemButton = document.createElement("button");

      itemButton.textContent = "Completed?";
      section.append(itemButton);

      ifCompleted === true
        ? (summary.innerHTML = "<strike>" + summaryText + "</strike>") //setProperty("text-decoration", "line-through")
        : (summary.innerHTML = "<strong>" + summaryText + "</strong>");
      itemButton.addEventListener("click", () => {
        console.log(ifCompleted);
      });
    }
  };
});
document.body.append(planetsList);

const planetsListRemover = document.createElement("button");
planetsListRemover.textContent = "Remove Planet List";
planetsListRemover.addEventListener("click", () => {
  document.body.removeChild(document.getElementsByTagName("section")[0]);
});
document.body.append(planetsListRemover);
