import React from 'react';
import { Link } from 'react-router-dom';


const Button = props => {

	return (
	<Link to={props.link} aria-label={props.label} rel="noopener noreferrer">	
    	<div className="more-block">
          <span>{props.text}</span>
    	</div>
    </Link>
	)
}


export default Button;
