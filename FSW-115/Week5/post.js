const postButton = document.createElement("button");
postButton.textContent = "Create New Todo";
document.body.append(postButton);
postButton.addEventListener("click", e => {
  e.preventDefault();

  //   <form name="todoform">
  //   <input name="title" placeholder="Title"/>
  //   <input name="description" placeholder="Description"/>
  //   <input name="imgUrl" placeholder="Image Url"/>
  //   <button>Submit</button>
  // </form>
  var form = document.createElement("form");
  document.body.append(form);

  var titleInput = document.createElement("input");
  form.append(titleInput);

  var descriptionInput = document.createElement("input");
  form.append(descriptionInput);

  var imgUrlInput = document.createElement("input");
  form.append(imgUrlInput);

  var priceInput = document.createElement("input");
  form.append(priceInput);

  titleInput.name = "title";
  descriptionInput.name = "description";
  imgUrlInput.name = "imgUrl";
  priceInput.name = "price";

  titleInput.placeholder = "Title";
  descriptionInput.placeholder = "Description";
  imgUrlInput.placeholder = "ImgUrl";
  priceInput.placeholder = "Price";

  const submitButton = document.createElement("button");
  submitButton.textContent = "Post New Todo";
  form.append(submitButton);

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const newTodo = {
      title: titleInput.value,
      description: form.description.value,
      imgUrl: form.imgUrl.value
    };

    axios
      .post("https://api.vschool.io/gmtnezschez/todo/", newTodo)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  });
});

// showData = data => {
//   const section = document.createElement("section");
//   document.body.append(section);
//   for (i = 0; i < data.length; i++) {
//     let ifCompleted =
//       data[i].completed === true
//         ? true //(summary.style.color = "red")
//         : false;
//     console.log(ifCompleted);
//     const details = document.createElement("details");
//     const summary = document.createElement("summary");
//     const p1 = document.createElement("p");
//     const img = document.createElement("img");
//     p1.textContent = "$" + data[i].price;
//     // const p2 = document.createElement("p");
//     //   summaryText = "Todo " + (i + 1) + ": " + data[i].title;
//     details.textContent = data[i].description;
//     // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
//     section.append(details);
//     summaryText = "Todo " + (i + 1) + ": " + data[i].title;
//     summary.textContent = summaryText;
//     details.append(summary);
//     img.src = data[i].imgUrl;
//     details.append(img);
//     img.style.display = "block";
//     details.append(p1);

//     const itemButton = document.createElement("button");

//     itemButton.textContent = "Completed?";
//     section.append(itemButton);

//     ifCompleted === true
//       ? (summary.innerHTML = "<strike>" + summaryText + "</strike>") //setProperty("text-decoration", "line-through")
//       : (summary.innerHTML = "<strong>" + summaryText + "</strong>");
//     itemButton.addEventListener("click", () => {
//       console.log(ifCompleted);
//     });
//   }
// };
