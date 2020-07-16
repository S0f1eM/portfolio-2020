import React from 'react';

const Card = props => {

	return (
    <div className="card">
     	<a href={props.url} target="_blank" rel="noopener noreferrer" 
             aria-label={props.content}><h3 className="neon-blue">{props.title}</h3></a>
      <hr className="only-light-mode"/>
        <p>{props.company}</p>
        <i>{props.date}</i>
        <p>{props.intro}</p>
        <p>{props.content}</p>
        <p>{props.works}</p>
        <p>{props.tasks}</p>
        <p className="dark-purple">{props.skills}</p>
        <p>{props.more}</p>
    </div>
	)
}


export default Card;
