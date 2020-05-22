import React, { useState } from "react";

import "./App.css";
import { Router } from "@reach/router";
import { QuizPage } from "./pageQuiz/quizPage"
import { StartPage  } from "./startPage/startPage";
import { EndPage } from "./endGame/endPage";

const App = () => {
	const [category, setCategory] = useState("Football")
  const [game, setGame] = useState({
    question: "",
    answers: [],
    correctAnswer: "",
    chosen: "",
    isChosen: false,
    score: 0,
    round: "",
    id: 0
  })

  return (
    <Router className='container'>
		  <StartPage path="/" setCategory={setCategory} category={category} />
      <QuizPage path="/quiz" category={category} game={game} setGame={setGame} />
		<EndPage game={game} setGame={setGame} path="/endPage" />
	</Router>
  )
}

export default App
