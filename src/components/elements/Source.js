import React from 'react';

const Source = props => {

	return (
    <div className="resources">
        <a href={props.url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label={props.title} 
                 tabindex="0" className="source-title"
        >
                {props.title}
        </a>
        <p tabindex="0">{props.intro}</p>
    </div>
	)
}


export default Source;

