import React, {useEffect}  from "react"
import { Link } from "@reach/router";
import { AnswerList } from "./answer/answerList"
import { Question } from "./question/question"
import { Cube } from "../cube/cube";

export const QuizPage = ({category, game, setGame }) => {

	  useEffect(
    () => {
		switch(category){
		case "Football":
		{
      const url = "https://my-json-server.typicode.com/wilk6/football/db"
			fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setGame({
            question: data.quiz[game.id].question,
            correctAnswer: data.quiz[game.id].correctAnswer,
            answers: [
              ...data.quiz[game.id].incorrectAnswer,
              data.quiz[game.id].correctAnswer,
            ].sort(),
            chosen: game.chosen,
            isChosen: game.isChosen,
            score: game.score,
            round: data.quiz[game.id].round,
            id: game.id,
          })
        })
		break;
		}
		case "Volleyball":{
      const url = "https://my-json-server.typicode.com/wilk6/volleyball/db"
      		fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setGame({
            question: data.quiz[game.id].question,
            correctAnswer: data.quiz[game.id].correctAnswer,
            answers: [
              ...data.quiz[game.id].incorrectAnswer,
              data.quiz[game.id].correctAnswer,
            ].sort(),
            chosen: game.chosen,
            isChosen: game.isChosen,
            score: game.score,
            round: data.quiz[game.id].round,
            id: game.id,
          })
        })
		break;
		}
		case "Basketball":{
        const url = "https://my-json-server.typicode.com/wilk6/basketball/db"
				fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          setGame({
            question: data.quiz[game.id].question,
            correctAnswer: data.quiz[game.id].correctAnswer,
            answers: [
              ...data.quiz[game.id].incorrectAnswer,
              data.quiz[game.id].correctAnswer,
            ].sort(),
            chosen: game.chosen,
            isChosen: game.isChosen,
            score: game.score,
            round: data.quiz[game.id].round,
            id: game.id,
          })
        })
		break;
		}
		default:
		break
	}

    },
    [category, game.id],
  )
  const next = () => {
    if (game.isChosen === true && game.id < 9) {
      setGame({
        question: game.question,
        answers: game.answers,
        correctAnswer: game.correctAnswer,
        chosen: "",
        isChosen: false,
        score: game.score,
        round: game.round,
        id: game.id + 1,
      })
    }
  }
  return (
    <div className='QuizPage'>
      <div className="Title">
        <article><p>Round: </p><span><p>{game.round}/10</p></span></article>
		<Cube />
        <article><p>Score: </p><span><p>{game.score}/10</p></span></article>
      </div>
      <Question game={game} />
      <AnswerList game={game} setGame={setGame} />
	  {
		  game.round === 10?
		  <button><Link to="/endPage">End game </Link></button>
		  : <button
        onClick={() => {
          next()
        }}
      >
        Next Question
      </button>
	  }

    </div>
  )
}
