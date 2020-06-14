import React from 'react';


const Card = props => {
	// const name = ['parallax 2016'];
	// const text = ['My first portfolio in 2016'];
	// const techno =['HTML', 'CSS', 'bootstrap', 'Javascript', 'jQuery', 'MySQL', 'React',
	// 				'Redux', 'Wordpress', 'PHP', 'Bash', 'LESS'];
	// const url = ['https://github.com/S0f1eM/portfolio-parallax-2016']


	return (
     <aside className="smCard">
     	<h3 className="workName">
     		<a className="workLink" href={props.url} target="_blank" rel="noopener noreferrer">
     			{props.name}
     		</a>
        </h3>
        	<p className="workText">{props.content}</p>
        	<p className="mainTechno"></p>
     </aside>
	)
}


export default Card;