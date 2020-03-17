import store from "./redux/combineReducers";
// console.log(store);
import { loading, addOne } from "./redux/loadingAddReducer";
import { counting, deleteOne } from "./redux/counterAndDelete";

var h2 = document.createElement("h2");
document.body.append(h2);
h2.textContent = "js file working";
var creatingBoxes = (tvShow, num) => {
  var tvShowList = document.getElementById("tvShow-list");
  var tvShowDiv = document.createElement("div");
  tvShowList.append(tvShowDiv);
  console.log(tvShow);
  tvShowDiv.id = tvShow._id;
  tvShowDiv.className = "box" + num;
  // tvShowDiv.style.backgroundColor = tvShow.color;
  tvShowDiv.style.background = "gray";
  tvShowDiv.style.display = "inline-block";
  tvShowDiv.style.color = "white";
  tvShowDiv.style.width = "25em";
  tvShowDiv.style.height = "30em";
  tvShowDiv.style.paddingLeft = "5em";
  tvShowDiv.style.paddingTop = "2.5em";
  tvShowDiv.style.paddingBottom = "2.5em";
  tvShowDiv.style.marginBottom = "2.5em";
  tvShowDiv.style.borderRadius = "100px";

  var buttonAnchorDel = document.createElement("a");
  tvShowDiv.append(buttonAnchorDel);
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
  buttonSpanDel.id = tvShow._id;

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
    for (var i = 0; i < h2s.length; i++) {
      console.log(i);
      h2s[i].textContent = "TvShow #" + (i + 1);
    }
    axios.delete("/tvShows/data/" + e.target.id).then(res => {
      console.log(res);
    });
  });

  var h2 = document.createElement("h2");
  var h2Span = document.createElement("span");
  tvShowDiv.append(h2);
  h2.append(h2Span);
  h2.className = "changing-nums";
  h2.style.display = "inline-block";
  h2Span.textContent = "TvShow #" + num;
  console.log(num);

  var h3Name = document.createElement("h3");
  var h3NameSpan = document.createElement("span");
  tvShowDiv.append(h3Name);
  h3Name.append(h3NameSpan);
  h3NameSpan.textContent = "Title: " + tvShow.title;

  var h3Phone = document.createElement("h3");
  var h3PhoneSpan = document.createElement("span");
  tvShowDiv.append(h3Phone);
  h3Phone.append(h3PhoneSpan);
  h3PhoneSpan.textContent = "Year: " + tvShow.year;

  var h3Email = document.createElement("h3");
  var h3EmailSpan = document.createElement("span");
  tvShowDiv.append(h3Email);
  h3Email.append(h3EmailSpan);
  h3EmailSpan.textContent = "Genre: " + tvShow.genre;

  var h3Photo = document.createElement("h3");
  var h3PhotoSpan = document.createElement("span");
  tvShowDiv.append(h3Photo);
  h3Photo.append(h3PhotoSpan);
  h3PhotoSpan.textContent = "Cover: ";
  var br = document.createElement("br");
  h3Photo.append(br);
  var h3Img = document.createElement("img");
  h3Photo.append(h3Img);
  h3Img.src = tvShow.imgUrl;
  h3Img.alt = "";
};
// SHOWS JS
let showState;
let array;
axios
  .get("data")
  .then(res => {
    array = res.data.tvShows;
    // console.log(array);
    store.dispatch(loading(array));
    showState = store.getState();
    console.log(showState);
    var arr = showState.loadingAdding;
    console.log(arr);
    arr.map(tvShow => {
      store.dispatch(counting());

      creatingBoxes(tvShow, store.getState().countingDelete);
      // console.log(store.getState());
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
  var newObject = {
    title: titleInput.value,
    // color: colorInput.value,
    year: yearInput.value,
    genre: genreInput.value,
    imgUrl: imgUrlInput.value
  };
  console.log(newObject);
  axios.post("/tvShows/data", newObject).then(res => {
    console.log(res);
  });
  store.dispatch(counting());
  store.dispatch(addOne(newObject));
  var newState = store.getState();
  console.log(newState.loadingAdding.length[newState.loadingAdding.length - 1]);
  creatingBoxes(
    newState.loadingAdding[newState.loadingAdding.length - 1],
    newState.countingDelete
  );
  store.dispatch(counting());
});
