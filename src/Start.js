import React from "react"
import "./index.css"

export default function Start(props){
    
    return(
        <div className="start">
            <h1 className="start-title">Quizz</h1>
            <p className="start-description">Lets have some fun with Quiz</p>
            <button className="start-btn" onClick={() => props.startBtn()} >Start quiz</button>
        </div>
    )
}