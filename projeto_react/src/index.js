import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"


function primeiroJAX (){
    return(
        <div>
            Douglas Braga
        </div>
    )
}

const App = () =>{
    return(
        <div className="App">
            {primeiroJAX()}
        </div>
    )
}

const rootElment = document.getElementById("root")
ReactDOM.render(<App />, rootElment)