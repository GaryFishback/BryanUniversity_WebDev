import React from "react";
// import backgroundObject from './makingObjects/backgroundStyle'
function CardImg(props) {
  // console.log(props);
  return (
    <figure className="card__image-container">
      <img className="card__image" src={props.src} alt={props.alt} />
    </figure>
  );
}

export default CardImg;
