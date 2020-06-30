import React from "react"


function Movie(props) {
    return (

        <div style = {{backgroundColor: props.backgroundColor, width: 500, position: "relative", left: 400}}>
            <h1>Title: {props.title}</h1>
            <h2>Stars: {props.stars}</h2>
            <h2>Release Date: {props.releaseDate}</h2>
            <h3>Information: {props.information}</h3>
            <hr/>
        </div>
    )
}

export default Movie