import React from "react"

function Header() {
    return (

        <header className="header">
            <div class="bg-img">
                <div class="container">
                    <div class="topnav">
                        <a href="#home">Home</a>
                        <a href="#news">News</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <div>
                            <h1 className="h1">Clean Blog</h1>
                            <h3 className="h3"> A Blog Theme by Start Bootstrap</h3>
                        </div>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header