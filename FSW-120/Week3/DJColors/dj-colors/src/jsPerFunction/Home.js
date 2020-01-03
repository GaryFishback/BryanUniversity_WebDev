//Home.js
import React from "react";
// import keys from './makingObjects/key'
// import Paragraph from './Paragraph'
// import UList from './List'
import Card from "./cards";
// import vacationSpots from './makingObjects/cardArray'
import "./../App.css";
// import keysObjectsInArray from './makingObjects/key'

function Home() {
  // const keysArray = keysObjectsInArray.map(key => <Card
  //     key={key} />)
  return (
    <div>
      {/* {keysArray} */}
      <Card />
    </div>
  );
}

export default Home;
