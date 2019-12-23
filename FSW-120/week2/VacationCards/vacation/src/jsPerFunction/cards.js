import React from "react";
import UList from "./List";
import vacationSpots from "./makingObjects/cardArray";
import backgroundObject from "./makingObjects/backgroundStyle";
import CardIMG from "./travelImgTag";
import CardSVG from "./CurvedTravelsvg";
import img from "./TravelImgSrc";
// import ListItems from "./listToCardWithKey"
// import objectToArray from './makingObjects/key'

function Card() {
  // function keys(array){
  //     for(var i = 0; i < array.length ; i++){
  //     return array[i]
  // }
  //   }

  const numbers = ["1", "2", "3", "4", "5"];

  // sentences.map((text, index) => {
  //     const image = images[index];
  //     return (<Component icon={image} text={text} />);
  // });
  // const cardComponents =
  return (
    <div id="wrapper">
      {vacationSpots.map(function(card, nums) {
        const keys = numbers[nums];
        // console.log(keys)
        return (
          <div className="container" key={keys}>
            <div className="card">
              <CardIMG
                src={
                  card.timeToGo === "Spring"
                    ? img[4].src
                    : card.timeToGo === "Summer"
                    ? img[2].src
                    : card.timeToGo === "Fall"
                    ? img[3].src
                    : img[1].src
                }
                alt={
                  card.timeToGo === "Spring"
                    ? img[0].alt
                    : card.timeToGo === "Summer"
                    ? img[2].alt
                    : card.timeToGo === "Fall"
                    ? img[3].alt
                    : img[1].alt
                }
              />
              <CardSVG
                BackgroundColor={
                  card.timeToGo === "Spring"
                    ? backgroundObject.li11
                    : card.timeToGo === "Summer"
                    ? backgroundObject.li3
                    : card.timeToGo === "Fall"
                    ? backgroundObject.li2
                    : backgroundObject.li1
                }
              />
              <UList
                className="card_content"
                id={"ul" + keys}
                li1={card.place}
                li2={
                  card.price < 500
                    ? "Price: " + card.price + "$"
                    : "Price: " + card.price <= 1000
                    ? "Price: " + card.price + "$$"
                    : "Price: " + card.price + "$$$"
                }
                li3={"Season: " + card.timeToGo}
                BackgroundColor={
                  card.timeToGo === "Spring"
                    ? backgroundObject.li11
                    : card.timeToGo === "Summer"
                    ? backgroundObject.li3
                    : card.timeToGo === "Fall"
                    ? backgroundObject.li2
                    : backgroundObject.li1
                }
                Color={
                  card.timeToGo === "Spring"
                    ? "lightpink"
                    : card.timeToGo === "Summer"
                    ? "lightyellow"
                    : card.timeToGo === "Fall"
                    ? "red"
                    : "blue"
                }
                marginTop={
                  card.timeToGo === "Spring"
                    ? "-60px"
                    : card.timeToGo === "Summer"
                    ? "-80px"
                    : card.timeToGo === "Fall"
                    ? "-85px"
                    : "-40px"
                }
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Card;
