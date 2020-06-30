//App.js

// import React from "react";
// import { withRouter, Switch, Route } from "react-router-dom";

// import GlobalStyle from "./Theme/GlobalStyle";
// import Landing from "./Landing/index";
// import Details from "./Tweets/Details/index";
// import Footer from "./Footer/index";

// function App() {
//   return (
//     <div>
//       <GlobalStyle />
//       <Switch>
//         <Route exact path="/" component={Landing} />
//         <Route exact path="/:id" component={Details} />
//       </Switch>
//       <Footer />
//     </div>
//   );
// }

// export default withRouter(App);
import React from "react"

import Movie from "./Movie"

const movies = [
{title:" Bad Boys for Life", subtitle: " Release Date: Jan 17, 2020", information: " Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.", backgroundColor:" lightblue"}, 
{title:" Jumanji: The Next Level", subtitle:" Release Date: Dec 13, 2019", information:" In Jumanji: The Next Level, the gang is back but the game has changed. As they return to rescue one of their own, the players will have to brave parts unknown from arid deserts to snowy mountains, to escape the world's most dangerous game."}, 
{title:" Sonic the Hedgehog", subtitle:" Release Date: Feb 14, 2020", information:" After discovering a small, blue, fast hedgehog, a small-town police officer must help him defeat an evil genius who wants to do experiments on him."}, 
{title:" Star Wars: Episode IX - The Rise of Skywalker", subtitle:" Release Date: Dec 20, 2019", information:" The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end."},
{title:" Dolittle", subtitle:" Release Date: Jan 17, 2020", information:" A physician who can talk to animals embarks on an adventure to find a legendary island with a young apprentice and a crew of strange pets."}, 
{title:" Extraction",Actors: " Chris Hemsworth, Bryon Lerum, Ryder Lerum",subtitle:" Release Date: “April 24, 2020", information:" Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord."}, 
{title:" Just Mercy", subtitle:" Release Date: “Jan 10, 2020", information:" World-renowned civil rights defense attorney Bryan Stevenson works to free a wrongly condemned death row prisoner."},
{title:" The Gentlemen", subtitle:" Release Date: “Jan 24, 2020", information:" An American expat tries to sell off his highly profitable marijuana empire in London, triggering plots, schemes, bribery and blackmail in an attempt to steal his domain out from under him."}, 
{title:" Bloodshot", subtitle:" Release Date: “Mar 13, 2020", information:" Ray Garrison, a slain soldier, is re-animated with superpowers." }]
function App() {
    return (
      
        <div>
            {movies.map((movie, index) =>{
                console.log (movie)
                return(
            <Movie
                key={index}
                title={movie.title}
                subtitle={movie.subtitle}
                information={movie.information}
                backgroundColor={movie.backgroundColor}
            />
                )
            })}
            
        </div>
    )
}

export default App