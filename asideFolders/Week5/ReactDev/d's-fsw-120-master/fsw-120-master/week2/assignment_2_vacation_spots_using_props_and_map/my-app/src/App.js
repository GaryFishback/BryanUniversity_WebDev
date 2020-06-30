import React from "react"
import "./App.css"
import VacationCard from "./Vacation"
import vacations from "./vacationData"


function App() {
    return (

        <div className="vacation-spots">
            {vacations.map(vacation => {
                console.log(vacation.price)
                return (
                    <VacationCard className="card"
                        key={vacation.place}
                        imgUrl={vacation.imgUrl}
                        class={vacation.imageclass}
                        place={vacation.place}
                        price={vacation.price <= 100 ? //if
                            `$ ${vacation.price}` :
                            vacation.price > 100 && vacation.price < 1000 ? //else if
                                `$$ ${vacation.price}` :
                                `$$$ ${vacation.price}`} //else <= MUST
                        timeToGo={vacation.timeToGo}
                        background={vacation.timeToGo === "Winter" ? "red" : // if
                            vacation.timeToGo === "Spring" ? "plum" : //else if
                                vacation.timeToGo === "Summer" ? "springgreen" : "yellowgreen" //else if / else
                        }
                    />
                )
            })}
        </div>
    )
}

export default App 