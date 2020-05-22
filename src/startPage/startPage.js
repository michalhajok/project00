import React,{ useState } from 'react'
import { Link } from "@reach/router";
export const StartPage = ({category,setCategory}) => {
	const Categories = ["Football","Volleyball", "Basketball"]

	return (
		<div className="StartPage">
		<div>
			<h1>Quiz App</h1>
			<button>
				<Link to="/quiz">Play</Link>
			</button>
			<p>Kategoria:</p>
			<div className="selectBox">
				<select onChange={(e)=>{setCategory(e.target.value)}}  >
					{Categories.map(Category =>{
						return <option value={Category} key={Category}> {Category}</option>
					})}
				</select>
			</div>

		</div>
		</div>
	)
}
