import React from "react";
// import backgroundObject from './makingObjects/backgroundStyle'
function UList(props) {
  return (
    <ul
      className={props.className}
      id={props.id}
      style={{ backgroundColor: props.BackgroundColor }}
    >
      <li className="li1">{props.li1}</li>
      <li className="li2">{props.li2}</li>
      <li className="li3">{props.li3}</li>
    </ul>
  );
}
export default UList;
