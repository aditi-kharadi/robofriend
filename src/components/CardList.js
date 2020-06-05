import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	if (true) {
		//throw new Error('NOoooo!');
	}
	const cardComponent = robots.map((user, i) =>{
		return (
		    <Card 
			   key ={i} 
			   id={robots[i].id} 
			   name={robots[i].name} 
			   email={robots[i].email}
			/>
		);
	})
	return (
		<div>
	      {cardComponent}
	    </div>
		);
}

export default CardList;

/* OR  */

/*

const CardList = ({ robots }) => {
	const cardComponent = robots.map((user, i) =>{
		return (
		    <Card 
			   key ={i} 
			   id={robots[i].id} 
			   name={robots[i].name} 
			   email={robots[i].name}
			/>
		);
	})
	return (
		<div>
	      {
	      	 robots.map((user, i) =>{
		               return (
						    <Card 
							   key ={i} 
							   id={robots[i].id} 
							   name={robots[i].name} 
							   email={robots[i].name}
							/>
						);
					})
	      }
	    </div>
	);
}

*/
