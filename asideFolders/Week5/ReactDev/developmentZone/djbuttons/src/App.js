
// // import logo from './logo.svg';
import './App.css'; //this is left because i left the App.css file for the style. 

//original App() function. 
// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }


//my checkbox app() function
// function App() {
//     return (
// <div>
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
            
//             <input type="checkbox" />
//             <p>Placeholder text here</p>
//         </div>
//     )
// }
// export default App;


import React from 'react'
import Home from './jsPerFunction/Home'
//function components
function App() {
  return (
    <div>
       <Home />  
    </div>
  )
}
export default App