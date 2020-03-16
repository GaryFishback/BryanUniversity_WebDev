var h2 = document.createElement("h2");
document.body.append(h2);
h2.textContent = "js file working";

function addOne(movie) {
  return {
    type: "ADD_ONE",
    data: movie
  };
}

function deleteOne(id) {
  return {
    type: "DELETE_ONE",
    data: id
  };
}
function countingMovies() {
  return {
    type: "COUNTER"
  };
}
function loading(data) {
  return {
    type: "LOADING",
    data: data
  };
}
const initialState = {
  //   array: axios.get("/movies").then(res => {
  //     return res.data;
  //   }),
  array: [],
  changing: "blue",
  counter: 0
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case "LOADING":
      return {
        array: action.data,
        changing: "green",
        newMovie: action.data,
        counter: state.counter
      };
    case "ADD_ONE":
      return {
        array: [...state.array],
        changing: "green",
        newMovie: action.data,
        counter: state.counter
      };
    case "DELETE_ONE":
      return {
        array: [...state.array],
        changing: "black",
        newMovie: state.newMovie,
        counter: state.counter - 1
      };
    case "COUNTER":
      return {
        array: [...state.array],
        changing: "red",
        newMovie: state.newMovie,
        counter: state.counter + 1
      };

    default:
      return state;
  }
}

const store = Redux.createStore(reducer);
let state;
let array;
axios
  .get("data")
  .then(res => {
    array = res.data.movies;
    console.log(array);
    store.dispatch(loading(array));
    state = store.getState();
    console.log(state);

    state.array.map(movie => {
      store.dispatch(countingMovies());

      creatingBoxes = (movie, num) => {
        var movieList = document.getElementById("movie-list");
        var movieDiv = document.createElement("div");

        movieList.append(movieDiv);

        movieDiv.id = movie._id;
        movieDiv.className = "box" + num;
        // movieDiv.style.backgroundColor = movie.color;
        movieDiv.style.background = "blue";
        movieDiv.style.display = "inline-block";
        movieDiv.style.color = "white";
        movieDiv.style.width = "25em";
        movieDiv.style.height = "30em";
        movieDiv.style.paddingLeft = "5em";
        movieDiv.style.paddingTop = "2.5em";
        movieDiv.style.paddingBottom = "2.5em";
        movieDiv.style.marginBottom = "2.5em";
        movieDiv.style.borderRadius = "100px";

        var buttonAnchorDel = document.createElement("a");
        movieDiv.append(buttonAnchorDel);
        buttonAnchorDel.className = "button";
        buttonAnchorDel.style.width = "50px";
        buttonAnchorDel.style.height = "50px";
        buttonAnchorDel.style.margin = "10px";
        buttonAnchorDel.style.left = "15em";
        buttonAnchorDel.style.display = "inline-block";

        var buttonSpanDel = document.createElement("span");
        buttonAnchorDel.append(buttonSpanDel);
        buttonSpanDel.textContent = "DEL";
        buttonSpanDel.className = "button__text";
        buttonSpanDel.style.paddingTop = "17px";
        buttonSpanDel.id = movie._id;

        buttonAnchorDel.addEventListener("click", e => {
          console.log(e.target.id);
          store.dispatch(deleteOne(e.target.id));
          console.log(store.getState());
          var div = document.getElementById(e.target.id);
          console.log(div);
          div.remove();
          console.log(div);
          var h2s = document.getElementsByClassName("changing-nums");
          console.log(h2s);
          for (let i = 0; i < h2s.length; i++) {
            h2s[i].textContent = "Movie #" + (i + 1);
          }
          axios.delete("/movies/data/" + e.target.id).then(res => {
            console.log(res);
          });
        });

        var h2 = document.createElement("h2");
        var h2Span = document.createElement("span");
        movieDiv.append(h2);
        h2.append(h2Span);
        h2.className = "changing-nums";
        h2.style.display = "inline-block";
        h2Span.textContent = "Movie #" + num;

        var h3Name = document.createElement("h3");
        var h3NameSpan = document.createElement("span");
        movieDiv.append(h3Name);
        h3Name.append(h3NameSpan);
        h3NameSpan.textContent = "Title: " + movie.title;

        var h3Phone = document.createElement("h3");
        var h3PhoneSpan = document.createElement("span");
        movieDiv.append(h3Phone);
        h3Phone.append(h3PhoneSpan);
        h3PhoneSpan.textContent = "Year: " + movie.year;

        var h3Email = document.createElement("h3");
        var h3EmailSpan = document.createElement("span");
        movieDiv.append(h3Email);
        h3Email.append(h3EmailSpan);
        h3EmailSpan.textContent = "Genre: " + movie.genre;

        var h3Photo = document.createElement("h3");
        var h3PhotoSpan = document.createElement("span");
        movieDiv.append(h3Photo);
        h3Photo.append(h3PhotoSpan);
        h3PhotoSpan.textContent = "Cover: ";
        var br = document.createElement("br");
        h3Photo.append(br);
        var h3Img = document.createElement("img");
        h3Photo.append(h3Img);
        h3Img.src = movie.imgUrl;
        h3Img.alt = "";
      };
      creatingBoxes(movie, store.getState().counter);
      console.log(store.getState());
    });
  })
  .catch(err => console.log(err));
var submitButton = document.getElementById("submit");
console.log(submitButton);
var submitButton = document.getElementById("submit");
console.log(submitButton);
submitButton.addEventListener("click", () => {
  var titleInput = document.getElementsByName("title")[0];
  // var colorInput = document.getElementsByName("color")[0];
  var yearInput = document.getElementsByName("year")[0];
  var genreInput = document.getElementsByName("genre")[0];
  var imgUrlInput = document.getElementsByName("imgUrl")[0];
  // console.log()
  console.log(titleInput.value);
  console.log(yearInput.value);
  console.log(genreInput.value);
  console.log(imgUrlInput.value);
  var newMovie = {
    title: titleInput.value,
    // color: colorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    imgUrl: imgUrlInput.value
  };
  console.log(newMovie);
  axios.post("/movies/data", newMovie).then(res => {
    console.log(res);
  });
  //   store.dispatch(countingMovies());
  //   store.dispatch(addOne(newMovie));
  //   var newState = store.getState();
  //   console.log(newState);
  //   creatingBoxes(newState.array[newState.array.length], newState.counter);
  //   //   store.dispatch(countingMovies());
});
