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
      imgUrl: form.imgUrl.value,
      price: form.priceInput.value
    };

    axios
      .post("https://api.vschool.io/gmtnezschez/todo/", newTodo)
      .then(response => console.log(response.data))
      .catch(error => console.log(error));
  });
});
