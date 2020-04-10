//   details/FullTweet.js
import React from 'react'


//use this id to filter through your array of tweets somewhere and pull out those properties to define the component details here
function Details({ id }) {
    return (
        <div>
            <p>
            Hey looks here is the id I will use to filter my array of tweets and only display the data from them
            </p>
            <p>
                {id}
            </p>
        </div>
    )
}

export default Details;
