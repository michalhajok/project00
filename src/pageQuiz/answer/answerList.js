import React from "react"
import { Answer } from "./answer"
export const AnswerList = ({ game, setGame }) => {
  const select = (answer) => {
    if (answer === game.correctAnswer) {
      setGame({
        question: game.question,
        answers: game.answers,
        correctAnswer: game.correctAnswer,
        chosen: answer,
        isChosen: true,
        score: game.score + 1,
        round: game.round,
        id: game.id,
      })
    } else {
      setGame({
        question: game.question,
        answers: game.answers,
        correctAnswer: game.correctAnswer,
        chosen: answer,
        isChosen: true,
        score: game.score,
        round: game.round,
        id: game.id,
      })
    }
  }

  return (
    <div className='AnswerList'>
      {game.answers.map((answer) => {
        return <Answer game={game} key={answer} answer={answer} select={select} />
      })}
    </div>
  )
}
