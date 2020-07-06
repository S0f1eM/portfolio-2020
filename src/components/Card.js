import React from 'react';

const Card = props => {

	return (
    <div className="card">
     	<a href={props.url} target="_blank" rel="noopener noreferrer" 
             aria-label={props.content}><h3>{props.title}</h3></a>
      <hr/>
        <p>{props.company}</p>
        <i>{props.date}</i>
        <p>{props.intro}</p>
        <p>{props.content}</p>
        <p>{props.more}</p>
    </div>
	)
}


export default Card;