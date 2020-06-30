import React from "react"
import "./App.css"

function VacationCard(props) {
  return (
    <div className="vacation-card" style={{ backgroundColor: props.background }}>
      <img className="img" Src={props.imgUrl} alt=" " />
      <h1 className="place">Place: {props.place}</h1>
      <h2 className="price" >Price: {props.price}</h2>
      <h2 className="timeToGo">Time To Go: {props.timeToGo}</h2>

      <hr />
    </div>
  )
}

export default VacationCard