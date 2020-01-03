import React from 'react'
function CheckBoxes(props) {
    return (
        <div className={props.className}>
            <input type="checkbox" />
            <span>{props.sp1}</span>
        </div>
    )
}
export default CheckBoxes


////my checkbox app() function
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