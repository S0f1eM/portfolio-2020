import React from 'react';

const Source = props => {

	return (
    <div className="resources-card">
        <a href={props.url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label={props.title} 
                 tabIndex="0" className="source-title"
        >
                {props.title}
        </a>
        <p tabIndex="0">{props.intro}</p>
    </div>
	)
}


export default Source;

