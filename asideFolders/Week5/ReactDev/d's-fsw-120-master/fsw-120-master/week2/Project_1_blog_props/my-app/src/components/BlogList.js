import React from "react"
import array from "./BlogData"
import BlogPost from "./BlogPost"

function BlogList() {
    return (
        <main>{array.map(blogPost => {
            return (
                <BlogPost className="card"
                    key={blogPost.title}
                    title={blogPost.title}
                    subTitle={blogPost.subTitle}
                    author={blogPost.author}
                    date={blogPost.date}
                />
            )
        })}</main>
    )
}
export default BlogList