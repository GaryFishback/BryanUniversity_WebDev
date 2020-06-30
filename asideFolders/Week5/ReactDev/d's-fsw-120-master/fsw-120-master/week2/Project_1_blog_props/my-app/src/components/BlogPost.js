import React from "react"

function BlogPost(props) {
    return (
        <main className="blogCard">
            <h1 className="title">Title: {props.title}</h1>
            <h2 className="subTitle" style = {{display: props.subTitle ? "block" :
            "none"}}>Sub Title: {props.subTitle}</h2>
            <h2 className="author">Author: {props.author}</h2>
            <h2 className="date">Date: {props.date}</h2>
            <hr />
            
        </main>
    )
}

export default BlogPost