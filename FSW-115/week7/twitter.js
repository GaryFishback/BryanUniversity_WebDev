var vid = document.getElementById("myvideo");
vid.autoplay = true;
document.body.addEventListener("mousemove", e => {
  // console.log(e);
  vid.play();
});
// console.log(vid);
stringLength = (string, chars) => {
  return string.length <= chars
    ? string
    : string.substring(0, string.length / 2);
};
makingDate = num => {
  let number = num.toString().slice(0, 8);
  //  console.log(number)

  const part1 = `${number.substr(0, 4)}`;

  const part2 = `${number.slice(4, 6)}`;
  const part3 = `${number.substr(6, 8)}`;

  return `${part1}-${part2}-${part3}`;
};
time = num => {
  let number = num.toString().slice(8, num.length);
  // console.log(number)
  // console.log(number)
  const part1 = `${number.substr(0, 2)}`;
  const part2 = `${number.slice(2, 4)}`;
  const part3 = `${number.substr(4, 6)}`;
  return `${part1}-${part2}-${part3}`;
};
newTime = date =>{
  let time = date.toString().slice(16, date.length);
  time = time.slice(0,8);
  var splitByDots = time.split(":");
    timeFormat = "";
    // for (var i = 0; i < splitByDots.length; i++) {
        timeFormat += splitByDots[0] +"-" + splitByDots[1] + "-" + splitByDots[2]
    // }
  return timeFormat
}
postingDateAndTime=(date,time) =>{
  let dateArr = date.split("-")
  let timeArr = time.split("-")
  console.log(dateArr)
  console.log(timeArr)
  let timeNumber = timeArr[0] + timeArr[1] + timeArr[2]
  let dateNumber = dateArr[0] + dateArr[1] + dateArr[2]
  console.log(timeNumber)
  console.log(dateNumber)
  let price = dateNumber+timeNumber
  return price
}
// console.log(makingDate(20200201073734))
// console.log(time(20200201073734))
const form = document.getElementsByTagName("form")[0];
const inputTitle = document.getElementsByTagName("input")[0];
const inputDescription = document.getElementsByTagName("input")[1];
const inputDate = document.getElementsByTagName("input")[2];
const formButton =document.getElementsByTagName("button")[0]

inputTitle.placeholder = "Title ";
inputDescription.placeholder = "Description ";
formButton.addEventListener("click", (e)=>{
  e.preventDefault()
  // console.log(inputTitle.value)
  // console.log(inputDescription.value)
  // console.log(inputDate.value)
  // console.log(newTime(new Date()))
  newTodo ={
    title: inputTitle.value,
    description: inputDescription.value,
    price: postingDateAndTime(inputDate.value, newTime(new Date()) )
  }
  axios
        .post("https://api.vschool.io/gmtnezschez/todo/", newTodo)
        .then(res => {
          console.log(res.data._id)
  console.log(newTodo)
  const ul = document.getElementsByTagName("ul")[0];
  const li = document.createElement("li");
    ul.insertBefore(li, ul.childNodes[0]);
    li.id = res.data._id;
    const checkbox = document.createElement("input");
    const checkmark = document.createElement("span");
    checkmark.id = res.data._id;
    checkbox.id = res.data._id;
    checkmark.className = "label";
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    li.append(checkmark);
    checkmark.append(checkbox);

    const span = document.createElement("span");
    span.className = "span";
    span.id = res.data._id;
    const h1 = document.createElement("h1");
    h1.textContent = `${stringLength(inputTitle.value, 10)}`;
    const p = document.createElement("p");
    h1.id = res.data._id;
    p.textContent = `${stringLength(inputDescription.value, 25)}`;
    li.append(span);
    span.append(h1, p);
    p.id = res.data._id;

    const button = document.createElement("button");
    button.textContent = "Trash Icon";
    li.append(button);
    button.id = res.data._id;
  
    const date = document.createElement("p");
    date.textContent = `Due: ${inputDate.value} at Time: ${newTime(new Date())} `;
    date.className = "date";
    date.id = res.data._id;
    li.append(date);
        })

        ifAlreadyCompleted = () => {
          h1.innerHTML = "<strike>" + h1.textContent + "</strike>"; //setProperty("text-decoration", "line-through")
          p.innerHTML = "<strike>" + p.textContent + "</strike>";
          date.innerHTML = "<strike>" + date.textContent + "</strike>";
          checkbox.checked = true;
        };
        ifNOTYetCompleted = () => {
          h1.innerHTML = "<strong>" + h1.textContent + "</strong>";
          p.innerHTML = "<strong>" + p.textContent + "</strong>";
          date.innerHTML = "<strong>" + date.textContent + "</strong>";
          checkbox.checked = false;
        };
        newtodo[i].completed ? ifAlreadyCompleted() : ifNOTYetCompleted();
    
        ifCompleted = id => {
          console.log(id);
          let checkingH1 = document.getElementsByTagName("h1");
          // console.log(checkingH1[14]);
          for (let i = 0; i < checkingH1.length - 1; i++) {
            checkingH1[i].id === id
              ? (checkingH1[i].innerHTML =
                  "<strike>" + checkingH1[i].textContent + "</strike>")
              : console.log(1);
          }
          let checkingP = document.getElementsByTagName("p");
          // console.log(checkingP);
          for (let i = 0; i < checkingP.length - 1; i++) {
            checkingP[i].id === id
              ? (checkingP[i].innerHTML =
                  "<strike>" + checkingP[i].textContent + "</strike>")
              : console.log(1);
          }
        };
        ifNOTCompleted = id => {
          console.log(id);
          let checkingH1 = document.getElementsByTagName("h1");
          console.log(checkingH1[14]);
          for (let i = 0; i < checkingH1.length - 1; i++) {
            checkingH1[i].id === id
              ? (checkingH1[i].innerHTML =
                  "<strong>" + checkingH1[i].textContent + "</strong>")
              : console.log(1);
          }
          let checkingP = document.getElementsByTagName("p");
          console.log(checkingP);
          for (let i = 0; i < checkingP.length - 1; i++) {
            checkingP[i].id === id
              ? (checkingP[i].innerHTML =
                  "<strong>" + checkingP[i].textContent + "</strong>")
              : console.log(1);
          }
        };
    
        ifChecked = checkbox => {
          axios
            .put("https://api.vschool.io/gmtnezschez/todo/" + checkbox.id, {
              completed: checkbox.checked === false ? false : true
            })
            .then(response => {
              // console.log(response.data);
    
              ifCompleted(checkbox.id);
            })
            .catch(error => console.log(error));
        };
        ifNOTChecked = checkbox => {
          axios
            .put("https://api.vschool.io/gmtnezschez/todo/" + checkbox.id, {
              completed: checkbox.checked === false ? false : true
            })
            .then(response => {
              // console.log(response.data);
              ifNOTCompleted(checkbox.id);
            })
            .catch(error => console.log(error));
        };
        checkbox.addEventListener("change", e => {
          e.target.checked === true
            ? ifChecked(e.target) //setProperty("text-decoration", "line-through")
            : ifNOTChecked(e.target);
          // console.log(e);
        });
        ifDblClicked = id => {
          let li = document.getElementsByTagName("li");
          for (let i = 0; i < li.length - 1; i++) {
            if (li[i].id === id) {
              // console.log(typeof(li[i].childNodes[1].childNodes[0].innerHTML))
              const headingText = li[i].childNodes[1].childNodes[0].innerHTML;
              //  console.log(typeof(li[i].childNodes[1].childNodes[1].innerHTML))
              const descriptionText = li[i].childNodes[1].childNodes[1].innerHTML;
              //  console.log(li[i].childNodes[3])
              // const currentDate = li[i].childNodes[3]
              // console.log(parseFloat(currentDate.textContent))
              li[i].removeChild(li[i].childNodes[1]);
              li[i].removeChild(li[i].childNodes[2]);
              const titleInput = document.createElement("input");
              titleInput.type = "text";
              titleInput.defaultValue = headingText;
              const descriptionInput = document.createElement("input");
              descriptionInput.type = "text";
              descriptionInput.defaultValue = descriptionText;
              const dateInput = document.createElement("input");
              dateInput.placeholder = "14 numbers: 0000-00-00-00-00-00";
              dateInput.type = "number";
              dateInput.class = "date";
              li[i].append(dateInput);
              li[i].insertBefore(titleInput, li[i].childNodes[1]);
              // console.log(li[i].childNodes)
              li[i].insertBefore(descriptionInput, li[i].childNodes[2]);
              const submitButton = document.createElement("button");
              submitButton.textContent = "Save";
              li[i].insertBefore(submitButton, li[i].childNodes[3]);
              li[i].style.gridTemplateColumns = "50px 35% 35% 50px 50px";
              li[i].style.gridGap = "10px";
    
              submitButton.addEventListener("mousedown", e => {
                e.preventDefault();
                axios
                  .put(`https://api.vschool.io/gmtnezschez/todo/${li[i].id}`, {
                    title: titleInput.value,
                    description: descriptionInput.value,
                    price: dateInput.value
                  })
                  .then(response => {
                    console.log(response.data);
                    if (dateInput.value.length === 14) {
                      li[i].removeChild(li[i].children[1]);
                      li[i].removeChild(li[i].children[1]);
                      li[i].removeChild(li[i].children[1]);
                      // console.log(li[i].children)
                      li[i].removeChild(li[i].children[2]);
    
                      const span = document.createElement("span");
                      span.className = "span";
                      span.id = response.data._id;
                      const h1 = document.createElement("h1");
                      h1.textContent = `${stringLength(response.data.title, 20)}`;
                      const p = document.createElement("p");
                      h1.id = response.data._id;
                      p.textContent = `${stringLength(
                        response.data.description,
                        50
                      )}`;
                      li[i].insertBefore(span, li[i].childNodes[1]);
                      span.append(h1, p);
                      p.id = response.data._id;
    
                      const date = document.createElement("p");
                      date.textContent = `Due: ${makingDate(
                        response.data.price
                      )} at Time: ${time(response.data.price)} `;
                      date.className = "date";
                      date.id = response.data._id;
                      li[i].append(date);
    
                      li[i].style.gridTemplateColumns = "50px 75% 50px";
                      li[i].style.gridGap = "10px";
    
                      ifAlreadyCompleted = () => {
                        h1.innerHTML = "<strike>" + h1.textContent + "</strike>"; //setProperty("text-decoration", "line-through")
                        p.innerHTML = "<strike>" + p.textContent + "</strike>";
                        date.innerHTML =
                          "<strike>" + date.textContent + "</strike>";
                        checkbox.checked = true;
                      };
                      ifNOTYetCompleted = () => {
                        h1.innerHTML = "<strong>" + h1.textContent + "</strong>";
                        p.innerHTML = "<strong>" + p.textContent + "</strong>";
                        date.innerHTML =
                          "<strong>" + date.textContent + "</strong>";
                        checkbox.checked = false;
                      };
                      response.data.completed
                        ? ifAlreadyCompleted()
                        : ifNOTYetCompleted();
                    }
                  });
              });
            }
          }
        };
        li.addEventListener("dblclick", e => {
          ifDblClicked(e.target.id);
          // console.log(e)
          // console.log(e);
        });
    button.addEventListener("mousedown", (e)=>{
      e.preventDefault();
                axios
                  .delete(`https://api.vschool.io/gmtnezschez/todo/${e.target.id}`)
                  .then(response => {})
                console.log(e.target.id)
                const li = document.getElementById(e.target.id)
                ul.removeChild(li)
    
    
    })
})

var newtodo;
axios.get("https://api.vschool.io/gmtnezschez/todo/").then(response => {
  newtodo = response.data;
  console.log(newtodo.length);
  for (let i = 0; i < newtodo.length; i++) {
    const ul = document.getElementsByTagName("ul")[0];
    const li = document.createElement("li");
    ul.append(li);
    li.id = newtodo[i]._id;
    const checkbox = document.createElement("input");
    const checkmark = document.createElement("span");
    checkmark.id = newtodo[i]._id;
    checkbox.id = newtodo[i]._id;
    checkmark.className = "label";
    checkbox.type = "checkbox";
    checkbox.className = "checkbox";
    li.append(checkmark);
    checkmark.append(checkbox);

    const span = document.createElement("span");
    span.className = "span";
    span.id = newtodo[i]._id;
    const h1 = document.createElement("h1");
    h1.textContent = `${stringLength(newtodo[i].title, 10)}`;
    const p = document.createElement("p");
    h1.id = newtodo[i]._id;
    p.textContent = `${stringLength(newtodo[i].description, 25)}`;
    li.append(span);
    span.append(h1, p);
    p.id = newtodo[i]._id;

    const button = document.createElement("button");
    button.textContent = "Trash Icon";
    li.append(button);
    button.id = newtodo[i]._id;

    const date = document.createElement("p");
    date.textContent = `Due: ${makingDate(newtodo[i].price)} at Time: ${time(
      newtodo[i].price
    )} `;
    date.className = "date";
    date.id = newtodo[i]._id;
    li.append(date);

    ifAlreadyCompleted = () => {
      h1.innerHTML = "<strike>" + h1.textContent + "</strike>"; //setProperty("text-decoration", "line-through")
      p.innerHTML = "<strike>" + p.textContent + "</strike>";
      date.innerHTML = "<strike>" + date.textContent + "</strike>";
      checkbox.checked = true;
    };
    ifNOTYetCompleted = () => {
      h1.innerHTML = "<strong>" + h1.textContent + "</strong>";
      p.innerHTML = "<strong>" + p.textContent + "</strong>";
      date.innerHTML = "<strong>" + date.textContent + "</strong>";
      checkbox.checked = false;
    };
    newtodo[i].completed ? ifAlreadyCompleted() : ifNOTYetCompleted();

    ifCompleted = id => {
      console.log(id);
      let checkingH1 = document.getElementsByTagName("h1");
      // console.log(checkingH1[14]);
      for (let i = 0; i < checkingH1.length - 1; i++) {
        checkingH1[i].id === id
          ? (checkingH1[i].innerHTML =
              "<strike>" + checkingH1[i].textContent + "</strike>")
          : console.log(1);
      }
      let checkingP = document.getElementsByTagName("p");
      // console.log(checkingP);
      for (let i = 0; i < checkingP.length - 1; i++) {
        checkingP[i].id === id
          ? (checkingP[i].innerHTML =
              "<strike>" + checkingP[i].textContent + "</strike>")
          : console.log(1);
      }
    };
    ifNOTCompleted = id => {
      console.log(id);
      let checkingH1 = document.getElementsByTagName("h1");
      console.log(checkingH1[14]);
      for (let i = 0; i < checkingH1.length - 1; i++) {
        checkingH1[i].id === id
          ? (checkingH1[i].innerHTML =
              "<strong>" + checkingH1[i].textContent + "</strong>")
          : console.log(1);
      }
      let checkingP = document.getElementsByTagName("p");
      console.log(checkingP);
      for (let i = 0; i < checkingP.length - 1; i++) {
        checkingP[i].id === id
          ? (checkingP[i].innerHTML =
              "<strong>" + checkingP[i].textContent + "</strong>")
          : console.log(1);
      }
    };

    ifChecked = checkbox => {
      axios
        .put("https://api.vschool.io/gmtnezschez/todo/" + checkbox.id, {
          completed: checkbox.checked === false ? false : true
        })
        .then(response => {
          // console.log(response.data);

          ifCompleted(checkbox.id);
        })
        .catch(error => console.log(error));
    };
    ifNOTChecked = checkbox => {
      axios
        .put("https://api.vschool.io/gmtnezschez/todo/" + checkbox.id, {
          completed: checkbox.checked === false ? false : true
        })
        .then(response => {
          // console.log(response.data);
          ifNOTCompleted(checkbox.id);
        })
        .catch(error => console.log(error));
    };
    checkbox.addEventListener("change", e => {
      e.target.checked === true
        ? ifChecked(e.target) //setProperty("text-decoration", "line-through")
        : ifNOTChecked(e.target);
      // console.log(e);
    });
    ifDblClicked = id => {
      let li = document.getElementsByTagName("li");
      for (let i = 0; i < li.length - 1; i++) {
        if (li[i].id === id) {
          // console.log(typeof(li[i].childNodes[1].childNodes[0].innerHTML))
          const headingText = li[i].childNodes[1].childNodes[0].innerHTML;
          //  console.log(typeof(li[i].childNodes[1].childNodes[1].innerHTML))
          const descriptionText = li[i].childNodes[1].childNodes[1].innerHTML;
          //  console.log(li[i].childNodes[3])
          // const currentDate = li[i].childNodes[3]
          // console.log(parseFloat(currentDate.textContent))
          li[i].removeChild(li[i].childNodes[1]);
          li[i].removeChild(li[i].childNodes[2]);
          const titleInput = document.createElement("input");
          titleInput.type = "text";
          titleInput.defaultValue = headingText;
          const descriptionInput = document.createElement("input");
          descriptionInput.type = "text";
          descriptionInput.defaultValue = descriptionText;
          const dateInput = document.createElement("input");
          dateInput.placeholder = "14 numbers: 0000-00-00-00-00-00";
          dateInput.type = "number";
          dateInput.class = "date";
          li[i].append(dateInput);
          li[i].insertBefore(titleInput, li[i].childNodes[1]);
          // console.log(li[i].childNodes)
          li[i].insertBefore(descriptionInput, li[i].childNodes[2]);
          const submitButton = document.createElement("button");
          submitButton.textContent = "Save";
          li[i].insertBefore(submitButton, li[i].childNodes[3]);
          li[i].style.gridTemplateColumns = "50px 35% 35% 50px 50px";
          li[i].style.gridGap = "10px";

          submitButton.addEventListener("mousedown", e => {
            e.preventDefault();
            axios
              .put(`https://api.vschool.io/gmtnezschez/todo/${li[i].id}`, {
                title: titleInput.value,
                description: descriptionInput.value,
                price: dateInput.value
              })
              .then(response => {
                console.log(response.data);
                if (dateInput.value.length === 14) {
                  li[i].removeChild(li[i].children[1]);
                  li[i].removeChild(li[i].children[1]);
                  li[i].removeChild(li[i].children[1]);
                  // console.log(li[i].children)
                  li[i].removeChild(li[i].children[2]);

                  const span = document.createElement("span");
                  span.className = "span";
                  span.id = response.data._id;
                  const h1 = document.createElement("h1");
                  h1.textContent = `${stringLength(response.data.title, 20)}`;
                  const p = document.createElement("p");
                  h1.id = response.data._id;
                  p.textContent = `${stringLength(
                    response.data.description,
                    50
                  )}`;
                  li[i].insertBefore(span, li[i].childNodes[1]);
                  span.append(h1, p);
                  p.id = response.data._id;

                  const date = document.createElement("p");
                  date.textContent = `Due: ${makingDate(
                    response.data.price
                  )} at Time: ${time(response.data.price)} `;
                  date.className = "date";
                  date.id = response.data._id;
                  li[i].append(date);

                  li[i].style.gridTemplateColumns = "50px 75% 50px";
                  li[i].style.gridGap = "10px";

                  ifAlreadyCompleted = () => {
                    h1.innerHTML = "<strike>" + h1.textContent + "</strike>"; //setProperty("text-decoration", "line-through")
                    p.innerHTML = "<strike>" + p.textContent + "</strike>";
                    date.innerHTML =
                      "<strike>" + date.textContent + "</strike>";
                    checkbox.checked = true;
                  };
                  ifNOTYetCompleted = () => {
                    h1.innerHTML = "<strong>" + h1.textContent + "</strong>";
                    p.innerHTML = "<strong>" + p.textContent + "</strong>";
                    date.innerHTML =
                      "<strong>" + date.textContent + "</strong>";
                    checkbox.checked = false;
                  };
                  response.data.completed
                    ? ifAlreadyCompleted()
                    : ifNOTYetCompleted();
                }
              });
          });
        }
      }
    };
    li.addEventListener("dblclick", e => {
      ifDblClicked(e.target.id);
      // console.log(e)
      // console.log(e);
    });
button.addEventListener("mousedown", (e)=>{
  e.preventDefault();
            axios
              .delete(`https://api.vschool.io/gmtnezschez/todo/${e.target.id}`)
              .then(response => {})
            console.log(e.target.id)
            const li = document.getElementById(e.target.id)
            ul.removeChild(li)


})
    // makingDate(newtodo[i].price)
    // time(newtodo[i].price)
    // console.log(
    //   newtodo[i].publication_date.substring(
    //     11,
    //     newtodo[i].publication_date.length - 5
    //   )
    // );
  }
  // <input name="checkbox" type="checkbox" />
  //         <span>
  //           <h1>blue:</h1>
  //           <p>red erergosjgk</p></span
  //         >
  //         <button>Trash can</button>
});

var companies;
axios
  .get(
    "https://api-v2.intrinio.com/companies/AAPL/news?api_key=OmRjM2E0MDZlMTFhNTRhY2M4NTdlOTkyZTdmY2NhNTE0"
  )
  .then(response => {
    companies = response.data.news;
    // console.log(response.data.news);

    // const li = document.getElementsByTagName("li");
    // console.log(li);
    // const liCheckbox = document.getElementsByName("checkbox");
    // const li = document.getElementsByTagName("li");
    for (let i = 5; i < companies.length / 10 + 4; i++) {
      const ul = document.getElementsByTagName("ul")[0];
      const li = document.createElement("li");
      ul.append(li);

      const checkbox = document.createElement("input");
      const checkmark = document.createElement("span");
      checkmark.className = "label";
      checkbox.type = "checkbox";
      checkbox.className = "checkbox";
      li.append(checkmark);
      checkmark.append(checkbox);
      const span = document.createElement("span");
      span.className = "span";
      const h1 = document.createElement("h1");
      h1.textContent = `${stringLength(companies[i].title, 10)}`;
      const p = document.createElement("p");
      p.textContent = `${stringLength(companies[i].summary, 25)}`;
      li.append(span);
      span.append(h1, p);

      const button = document.createElement("button");
      button.textContent = "Trash Icon";
      li.append(button);

      const date = document.createElement("p");
      date.textContent = `Due: ${companies[i].publication_date.substring(
        0,
        companies[i].publication_date.length - 14
      )} at Time: ${companies[i].publication_date.substring(
        11,
        companies[i].publication_date.length - 5
      )} `;
      date.className = "date";
      li.append(date);
      // console.log(companies[i].publication_date);
      // console.log(
      //   companies[i].publication_date.substring(
      //     11,
      //     companies[i].publication_date.length - 5
      //   )
      // );
      // <input name="checkbox" type="checkbox" />
      //         <span>
      //           <h1>blue:</h1>
      //           <p>red erergosjgk</p></span
      //         >
      //         <button>Trash can</button>
    }
    // console.log(companies);
  })
  .catch(err => console.log(err));
