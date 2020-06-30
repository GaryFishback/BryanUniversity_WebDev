import React from "react"

import Movie from "./Movie"
import movies from "./movieDate"


function App() {
    return (
      
        <div>
            {movies.map(movie =>{
                return(
            <Movie
                key={movie.title}
                title={movie.title}
                stars={movie.stars}
                releaseDate={movie.releaseDate}
                information={movie.information}
                backgroundColor={movie.backgroundColor}
            />
                )
            })}
            
        </div>
    )
}

export default App