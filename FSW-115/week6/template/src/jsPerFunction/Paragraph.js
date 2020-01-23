import React, { Component } from "react";
import styled from "styled-components/macro";
class Paragraph extends Component {
  render() {
    const Button = styled.button`
      /* Adapt the colors based on primary prop */
      background: ${props => (props.primary ? "palevioletred" : "white")};
      color: ${props => (props.primary ? "white" : "palevioletred")};
      font-size: 1em;
      margin: 1em;
      padding: 0.25em 1em;
      border: 2px solid palevioletred;
      border-radius: 3px;
    `;
    return (
      <div className={this.props.className}>
        <Button>Normal</Button>
        <Button primary>Primary</Button>
      </div>
    );
  }
}
export default Paragraph;

// async function getData() {
//   axios.get("https://swapi.co/api/people/1");
// }

// const getData = async () => {};

const getData = async () => {
  try {
    const response = await axios.get("https://swapi.co/api/people/1");
    const homeworld = await axios.get(response.data.homeworld);
    listHomeWorldToDOM(homeworld, response);
  } catch (error) {
    console.log(error);
  }
};

getData();

function listHomeWorldToDOM(homeworld, luke) {
  const h1 = document.createElement("h1");
  h1.textContent = homeworld.data.name;
  document.body.appendChild(h1);

  const nameh1 = document.createElement("h1");
  nameh1.textContent = luke.data.name;
  document.body.appendChild(nameh1);
}

async function getAllLukeMovies() {
  const lukeData = await axios.get("https://swapi.co/api/people/1");
  const lukeFilmUrls = lukeData.data.films;
  const pendingPromises = [];

  for (let i = 0; i < lukeFilmUrls.length; i++) {
    pendingPromises.push(axios.get(lukeFilmUrls[i]));
  }

  Promise.all(pendingPromises)
    .then(response => {
      for (let i = 0; i < response.length; i++) {
        const h1 = document.createElement("h1");
        h1.textContent = response[i].data.name;
        document.body.appendChild(h1);
      }
    })
    .catch(error => console.log(error));
}

getAllLukeMovies();

const h1 = document.createElement("h1");
h1.textContent = "is just loading";
document.body.appendChild(h1);
