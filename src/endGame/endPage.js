import React from 'react'
import { Link } from "@reach/router";
export const EndPage = ({game,setGame}) => {
	return (
		<div className="EndPage">
			<div>
				<h1>Gratulacje ;)</h1>
				<p>Twój wynik: {game.score}</p>
				<button>
					<Link onClick={()=>{
						setGame({
							question: game.question,
							answers: game.answers,
							correctAnswer: game.correctAnswer,
							chosen: game.chosen,
							isChosen: false,
							score: 0,
							round: 1,
							id:  0,
						})
					}} to="/project00">Play again</Link>
				</button>
			</div>
		</div>
	)
}
