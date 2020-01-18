const list = document.createElement("button");
list.textContent = "Create List";
list.addEventListener("click", () => {
  axios
    .get("https://api.vschool.io/gmtnezschez/todo/")
    .then(response => {
      var data = response.data;
      // console.log(data);
      showData(data);
    })
    .catch(err => console.log(err));

  showData = data => {
    const section = document.createElement("section");
    document.body.append(section);
    for (i = 0; i < data.length; i++) {
      // console.log(data[i]._id);
      let ifCompleted =
        data[i].completed === true
          ? true //(summary.style.color = "red")
          : false;
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

      ifCompleted === true
        ? (summary.innerHTML = "<strike>" + summaryText + "</strike>") //setProperty("text-decoration", "line-through")
        : (summary.innerHTML = "<strong>" + summaryText + "</strong>");

      const itemButton = document.createElement("button");
      itemButton.textContent = "Completed" + (i + 1);
      itemButton.className = data[i]._id;
      details.append(itemButton);
      itemButtonFunction = e => {
        axios
          .get("https://api.vschool.io/gmtnezschez/todo/")
          .then(response => {
            var data = response.data;
            // console.log(data);
            // console.log(ifCompleted);

            for (i = 0; i < data.length; i++) {
              // console.log(data[i]._id);
              // console.log(e.target.className);
              if (e.target.className === data[i]._id) {
                axios
                  .put(
                    "https://api.vschool.io/gmtnezschez/todo/" +
                      itemButton.className,
                    {
                      completed: data[i].completed === false ? true : false
                    }
                  )
                  .then(response => {
                    var updateData = response.data;

                    summaryCompleted(updateData);

                    // updateData(updateData);
                  })
                  .catch(error => console.log(error));
                summaryCompleted = data => {
                  // console.log(data.completed);
                  data.completed === true
                    ? (summary.innerHTML =
                        "<strike>" + summary.textContent + "</strike>")
                    : // "Blue Tail!") //setProperty("text-decoration", "line-through")
                      (summary.innerHTML =
                        "<strong>" + summary.textContent + "</strong>");
                  // }
                };
                // updateData = data => {
                //   console.log(data);
              }
            }
          })
          .catch(err => console.log(err));
      };
      itemButton.addEventListener("click", itemButtonFunction);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete" + (i + 1);
      deleteButton.className = data[i]._id;
      details.append(deleteButton);
      deleteFunction = e => {
        axios
          .get("https://api.vschool.io/gmtnezschez/todo/")
          .then(response => {
            var data = response.data;
            // console.log(data);
            // console.log(ifCompleted);

            for (i = 0; i < data.length; i++) {
              // console.log(data[i]._id);
              // console.log(e.target.className);
              if (e.target.className === data[i]._id) {
                axios
                  .delete(
                    "https://api.vschool.io/gmtnezschez/todo/" +
                      deleteButton.className
                  )
                  .then(response => {
                    var deleteMessageData = response;
                    console.log(deleteMessageData.data);
                    alert(deleteMessageData.data.msg);
                    section.removeChild(details);
                    // updateData(updateData);
                  })
                  .catch(error => console.log(error));

                // updateData = data => {
                //   console.log(data);
              }
            }
          })
          .catch(err => console.log(err));
      };
      deleteButton.addEventListener("click", deleteFunction);

      const editButton = document.createElement("button");
      editButton.textContent = "Edit" + (i + 1);
      editButton.className = data[i]._id;
      details.append(editButton);
      editFunction = e => {
        axios
          .get("https://api.vschool.io/gmtnezschez/todo/")
          .then(response => {
            var data = response.data;
            // console.log(data);
            // e => {
            for (i = 0; i < data.length; i++) {
              if (e.target.className === data[i]._id) {
                e.preventDefault();

                var updatingForm = document.createElement("updatingForm");
                details.append(updatingForm);

                var titleInput = document.createElement("input");
                updatingForm.append(titleInput);

                var descriptionInput = document.createElement("input");
                updatingForm.append(descriptionInput);

                var imgUrlInput = document.createElement("input");
                updatingForm.append(imgUrlInput);

                var priceInput = document.createElement("input");
                updatingForm.append(priceInput);

                titleInput.name = "title";
                descriptionInput.name = "description";
                imgUrlInput.name = "imgUrl";
                priceInput.name = "price";

                titleInput.placeholder = "Title";
                descriptionInput.placeholder = "Description";
                imgUrlInput.placeholder = "ImgUrl";
                priceInput.placeholder = "Price";

                titleInput.defaultValue = data[i].title;
                descriptionInput.defaultValue = data[i].description;
                imgUrlInput.defaultValue = data[i].imgUrl;
                priceInput.defaultValue = data[i].price;

                const submitButton = document.createElement("button");
                submitButton.textContent = "Post New Todo";
                updatingForm.append(submitButton);
                submitFunction = e => {
                  e.preventDefault();
                  updatedTodo = {
                    title: titleInput.value,
                    description: descriptionInput.value,
                    imgUrl: imgUrlInput.value,
                    price: priceInput.value
                  };
                  // console.log(updatedTodo);
                  for (i = 0; i < data.length; i++) {
                    // console.log(data[i]._id);

                    // console.log(editButton.className);
                    if (editButton.className === data[i]._id) {
                      // console.log(updatedTodo);
                      // console.log(updatedTodo);
                      axios
                        .put(
                          "https://api.vschool.io/gmtnezschez/todo/" +
                            editButton.className,
                          updatedTodo
                        )
                        .then(response => {
                          var updateData = response.data;
                          // console.log(updateData);
                          editedTodo(updateData);

                          // updateData(updateData);
                        })
                        .catch(error => console.log(error));
//lines indented to visibly separate editedtodo function from the rest
                                                                                            editedTodo = data => {
                                                                                              // console.log(data.title);
                                                                                        

                                                                                              // const p2 = document.createElement("p");
                                                                                              //
                                                                                              details.textContent = data.description;
                                                                                              // p2.textContent = "URI: " + data.pokemon[i].resource_uri;
                                                                                              // section.append(details);
                                                                                              // summaryText = data.title;
                                                                                              // summaryText = "Todo " + (i + 1) + ": " + data.title;
                                                                                              
                                                                                              summary.textContent =
                                                                                                "Todo " + summary.textContent.charAt(5) + ": " + data.title;
                                                                                              details.append(summary);
                                                                                              img.src = data.imgUrl;
                                                                                              details.append(img);
                                                                                              img.style.display = "block";
                                                                                              p1.textContent = "$" + data.price;
                                                                                              details.append(p1);
                                                                                              data.completed === true
                                                                                                ? (summary.innerHTML =
                                                                                                    "<strike>" + summary.textContent + "</strike>")
                                                                                                : // "Blue Tail!") //setProperty("text-decoration", "line-through")
                                                                                                  (summary.innerHTML =
                                                                                                    "<strong>" + summary.textContent + "</strong>");
                                                                                              // ifCompleted === true
                                                                                              //   ? (summary.innerHTML =
                                                                                              //       "<strike>" + summaryText + "</strike>") //setProperty("text-decoration", "line-through")
                                                                                              //   : (summary.innerHTML =
                                                                                              //       "<strong>" + summaryText + "</strong>");
                                                                                              details.append(itemButton);
                                                                                              itemButton.className = data._id
                                                                                              itemButtonFunction = e => {
                                                                                                axios
                                                                                                  .get("https://api.vschool.io/gmtnezschez/todo/")
                                                                                                  .then(response => {
                                                                                                    var data = response.data;
                                                                                                    // console.log(data);
                                                                                                    // console.log(ifCompleted);

                                                                                                    for (i = 0; i < data.length; i++) {
                                                                                                      // console.log(data[i]._id);
                                                                                                      // console.log(e.target.className);
                                                                                                      if (e.target.className === data[i]._id) {
                                                                                                        axios
                                                                                                          .put(
                                                                                                            "https://api.vschool.io/gmtnezschez/todo/" +
                                                                                                              itemButton.className,
                                                                                                            {
                                                                                                              completed:
                                                                                                                data[i].completed === false
                                                                                                                  ? true
                                                                                                                  : false
                                                                                                            }
                                                                                                          )
                                                                                                          .then(response => {
                                                                                                            var updateData = response.data;

                                                                                                            summaryCompleted(updateData);

                                                                                                            // updateData(updateData);
                                                                                                          })
                                                                                                          .catch(error => console.log(error));
                                                                                                        summaryCompleted = data => {
                                                                                                          // console.log(data.completed);
                                                                                                          // console.log(data);
                                                                                                          console.log(data.completed);
                                                                                                          console.log("blue");
                                                                                                          data.completed === true
                                                                                                          ? (summary.innerHTML =
                                                                                                              "<strike>" + summary.textContent + "</strike>")
                                                                                                          : // "Blue Tail!") //setProperty("text-decoration", "line-through")
                                                                                                            (summary.innerHTML =
                                                                                                              "<strong>" + summary.textContent + "</strong>");
                                                                                                          // }
                                                                                                        };
                                                                                                        // updateData = data => {
                                                                                                        //   console.log(data);
                                                                                                      }
                                                                                                    }
                                                                                                  })
                                                                                                  .catch(err => console.log(err));
                                                                                              };
                                                                                              itemButton.addEventListener(
                                                                                                "click",
                                                                                                itemButtonFunction
                                                                                              );

                                                                                              details.append(deleteButton);

                                                                                              deleteButton.addEventListener("click", deleteFunction);

                                                                                              details.append(editButton);
                                                                                              editButton.addEventListener("click", editFunction);
                                                                                              // }
                                                                                            };
                    }
                  }
                };
                // console.log(updatedTodo);
                submitButton.addEventListener("click", submitFunction);

                // updateData = data => {
                //   console.log(data);
                //     }
                //   }
                // });
                // };
              }
            } //for and if {}
          })
          .catch(err => console.log(err));
      };
      editButton.addEventListener("click", editFunction);
    }
  };
});
document.body.append(list);
const listRemover = document.createElement("button");
listRemover.textContent = "Remove List";
listRemover.addEventListener("click", () => {
  document.body.removeChild(document.getElementsByTagName("section")[0]);
});
document.body.append(listRemover);

// function clearList(){
//   const el = document.getElementById('todo-list')
//   while(el.firstChild){
//       el.removeChild(el.firstChild)
//   }
// }
