import React from 'react';
import { Link } from 'react-router-dom';
import ScrollTo from '../action/ScrollTo';


const Button = props => {

	return (     	
    <div className="more-about more-block">
          <ScrollTo> 
            <Link to={props.link}  
                  aria-label={props.label}
                  rel="noopener noreferrer">{props.text}</Link>
          </ScrollTo>
    </div>
	)
}


export default Button;
