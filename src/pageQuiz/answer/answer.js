import React from "react"

export const Answer = ({ game, answer, select }) => {
  return game.isChosen ?(
	  answer === game.chosen ? (
	  	answer === game.correctAnswer ? (
    	<div className='correctAnswer'>
      		<p>{answer}</p>
   	 	</div>
  ) :
  (
    <div className='incorrectAnswer'>
      <p>{answer}</p>
    </div>
  )):
  answer===game.correctAnswer?
  (
	  <div className='correctAnswer'>
      		<p>{answer}</p>
   	 	</div>
  ):(
  <div className='otherAnswer'>
      <p>{answer}</p>
    </div>
	)) : (
    <div
      className='Answer'
      onClick={(e) => {
        select(answer)
      }}
    >
      <p>{answer}</p>
    </div>
  )
}
