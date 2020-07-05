import React from 'react';


const Card = props => {

	return (
    <div className="card">
     	<h3><a href={props.url} target="_blank" rel="noopener noreferrer" 
             aria-label={props.content} >{props.title}</a></h3>
      <hr/>
        <p>{props.company}</p>
        <i>{props.date}</i>
        <p>{props.intro}</p>
        <p>{props.content}</p>
    </div>
	)
}


export default Card;