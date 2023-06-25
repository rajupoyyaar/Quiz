import React from "react"
import Start from "./Start"
import Questions from "./Questions";

function App() {
const [startQuiz, setStartQuiz] = React.useState(false)

function handleClick(){
  setStartQuiz(!startQuiz)
}

  return (
    <div >
      {startQuiz ? "" :
      <Start 
       startBtn = {handleClick}
       />}

      {startQuiz && 
      <Questions 
      startBtn = {handleClick}
      />}
    </div>
  );
}

export default App;
