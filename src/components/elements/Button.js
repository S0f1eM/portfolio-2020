import React from 'react';
import { Link } from 'react-router-dom';


const Button = props => {

	return (
	<Link to={props.link} aria-label={props.label} title={props.text} rel="noopener noreferrer" role="button">	
    	<div className="more-block">
          <span>{props.text}</span>
    	</div>
    </Link>
	)
}


export default Button;
