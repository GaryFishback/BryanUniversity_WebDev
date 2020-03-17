/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }\n\nvar h2 = document.createElement(\"h2\");\ndocument.body.append(h2);\nh2.textContent = \"js file working\";\n\nfunction addOne(movie) {\n  return {\n    type: \"ADD_ONE\",\n    data: movie\n  };\n}\n\nfunction deleteOne(id) {\n  return {\n    type: \"DELETE_ONE\",\n    data: id\n  };\n}\nfunction countingMovies() {\n  return {\n    type: \"COUNTER\"\n  };\n}\nfunction loading(data) {\n  return {\n    type: \"LOADING\",\n    data: data\n  };\n}\nvar moviesState = {\n  //   array: axios.get(\"/movies\").then(res => {\n  //     return res.data;\n  //   }),\n  array: [],\n  changing: \"blue\",\n  counter: 0\n};\nfunction reducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : moviesState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case \"LOADING\":\n      return {\n        array: action.data,\n        changing: \"green\",\n        newObject: action.data,\n        counter: state.counter\n      };\n    case \"ADD_ONE\":\n      console.log(action);\n      return {\n        array: [].concat(_toConsumableArray(state.array), [action.data]),\n        changing: \"green\",\n        newObject: action.data,\n        counter: state.counter\n      };\n    case \"DELETE_ONE\":\n      return {\n        array: [].concat(_toConsumableArray(state.array)),\n        changing: \"black\",\n        newObject: state.newObject,\n        counter: state.counter - 1\n      };\n    case \"COUNTER\":\n      return {\n        array: [].concat(_toConsumableArray(state.array)),\n        changing: \"red\",\n        newObject: state.newObject,\n        counter: state.counter + 1\n      };\n\n    default:\n      return state;\n  }\n}\n\nvar store = Redux.createStore(reducer);\n\n// MOVIES JS\nvar movieState = void 0;\nvar array = void 0;\naxios.get(\"data\").then(function (res) {\n  array = res.data.movies;\n  console.log(array);\n  store.dispatch(loading(array));\n  movieState = store.getState();\n  console.log(movieState);\n\n  movieState.array.map(function (movie) {\n    store.dispatch(countingMovies());\n\n    creatingBoxes = function creatingBoxes(movie, num) {\n      var movieList = document.getElementById(\"movie-list\");\n      var movieDiv = document.createElement(\"div\");\n\n      movieList.append(movieDiv);\n\n      movieDiv.id = movie._id;\n      movieDiv.className = \"box\" + num;\n      // movieDiv.style.backgroundColor = movie.color;\n      movieDiv.style.background = \"blue\";\n      movieDiv.style.display = \"inline-block\";\n      movieDiv.style.color = \"white\";\n      movieDiv.style.width = \"25em\";\n      movieDiv.style.height = \"30em\";\n      movieDiv.style.paddingLeft = \"5em\";\n      movieDiv.style.paddingTop = \"2.5em\";\n      movieDiv.style.paddingBottom = \"2.5em\";\n      movieDiv.style.marginBottom = \"2.5em\";\n      movieDiv.style.borderRadius = \"100px\";\n\n      var buttonAnchorDel = document.createElement(\"a\");\n      movieDiv.append(buttonAnchorDel);\n      buttonAnchorDel.className = \"button\";\n      buttonAnchorDel.style.width = \"50px\";\n      buttonAnchorDel.style.height = \"50px\";\n      buttonAnchorDel.style.margin = \"10px\";\n      buttonAnchorDel.style.left = \"15em\";\n      buttonAnchorDel.style.display = \"inline-block\";\n\n      var buttonSpanDel = document.createElement(\"span\");\n      buttonAnchorDel.append(buttonSpanDel);\n      buttonSpanDel.textContent = \"DEL\";\n      buttonSpanDel.className = \"button__text\";\n      buttonSpanDel.style.paddingTop = \"17px\";\n      buttonSpanDel.id = movie._id;\n\n      buttonAnchorDel.addEventListener(\"click\", function (e) {\n        console.log(e.target.id);\n        store.dispatch(deleteOne(e.target.id));\n        console.log(store.getState());\n        var div = document.getElementById(e.target.id);\n        console.log(div);\n        div.remove();\n        console.log(div);\n        var h2s = document.getElementsByClassName(\"changing-nums\");\n        console.log(h2s);\n        for (var i = 0; i < h2s.length; i++) {\n          h2s[i].textContent = \"Movie #\" + (i + 1);\n        }\n        axios.delete(\"/movies/data/\" + e.target.id).then(function (res) {\n          console.log(res);\n        });\n      });\n\n      var h2 = document.createElement(\"h2\");\n      var h2Span = document.createElement(\"span\");\n      movieDiv.append(h2);\n      h2.append(h2Span);\n      h2.className = \"changing-nums\";\n      h2.style.display = \"inline-block\";\n      h2Span.textContent = \"Movie #\" + num;\n\n      var h3Name = document.createElement(\"h3\");\n      var h3NameSpan = document.createElement(\"span\");\n      movieDiv.append(h3Name);\n      h3Name.append(h3NameSpan);\n      h3NameSpan.textContent = \"Title: \" + movie.title;\n\n      var h3Phone = document.createElement(\"h3\");\n      var h3PhoneSpan = document.createElement(\"span\");\n      movieDiv.append(h3Phone);\n      h3Phone.append(h3PhoneSpan);\n      h3PhoneSpan.textContent = \"Year: \" + movie.year;\n\n      var h3Email = document.createElement(\"h3\");\n      var h3EmailSpan = document.createElement(\"span\");\n      movieDiv.append(h3Email);\n      h3Email.append(h3EmailSpan);\n      h3EmailSpan.textContent = \"Genre: \" + movie.genre;\n\n      var h3Photo = document.createElement(\"h3\");\n      var h3PhotoSpan = document.createElement(\"span\");\n      movieDiv.append(h3Photo);\n      h3Photo.append(h3PhotoSpan);\n      h3PhotoSpan.textContent = \"Cover: \";\n      var br = document.createElement(\"br\");\n      h3Photo.append(br);\n      var h3Img = document.createElement(\"img\");\n      h3Photo.append(h3Img);\n      h3Img.src = movie.imgUrl;\n      h3Img.alt = \"\";\n    };\n    creatingBoxes(movie, store.getState().counter);\n    console.log(store.getState());\n  });\n}).catch(function (err) {\n  return console.log(err);\n});\nvar submitButton = document.getElementById(\"submit\");\nconsole.log(submitButton);\nvar submitButton = document.getElementById(\"submit\");\nconsole.log(submitButton);\nsubmitButton.addEventListener(\"click\", function () {\n  var titleInput = document.getElementsByName(\"title\")[0];\n  // var colorInput = document.getElementsByName(\"color\")[0];\n  var yearInput = document.getElementsByName(\"year\")[0];\n  var genreInput = document.getElementsByName(\"genre\")[0];\n  var imgUrlInput = document.getElementsByName(\"imgUrl\")[0];\n  // console.log()\n  console.log(titleInput.value);\n  console.log(yearInput.value);\n  console.log(genreInput.value);\n  console.log(imgUrlInput.value);\n  var newObject = {\n    title: titleInput.value,\n    // color: colorInput.value,\n    year: yearInput.value,\n    genre: genreInput.value,\n    imgUrl: imgUrlInput.value\n  };\n  console.log(newObject);\n  axios.post(\"/movies/data\", newObject).then(function (res) {\n    console.log(res);\n  });\n  store.dispatch(countingMovies());\n  store.dispatch(addOne(newObject));\n  var newState = store.getState();\n  console.log(newState);\n  creatingBoxes(newState.array[newState.array.length - 1], newState.counter);\n  //   store.dispatch(countingMovies());\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });