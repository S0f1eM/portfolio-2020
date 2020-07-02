import React from 'react';


const Card = props => {

	return (
     <div className="smCard">
     	<h3 className="workName">
     		<a className="workLink" 
               href={props.url} 
               target="_blank" 
               rel="noopener noreferrer"
               aria-label={props.content}
            >
     			{props.title}
     		</a>
        </h3>
        <hr/>
            <p className="workcompany">{props.company}</p>
            <i className="workdate">{props.date}</i>
            <p className="workintro">{props.intro}</p>
        	<p className="workcontent">{props.content}</p>

     </div>
	)
}


export default Card;