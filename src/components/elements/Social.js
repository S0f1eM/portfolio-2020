import React from 'react';
import { Link } from 'react-router-dom';


const Social = () => {

	const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";

	return (
    	<section className="profil">
	        <Link className="social" to={linkedin} 
	        	  aria-label="go to the linkedin account"
	        	  title="link to linkedin">Linkedin</Link>
	        <Link className="social" to={twitter} 
	        	  aria-label="go to the twitter account" 
	              title="link to Twitter">Twitter</Link>
	        <Link className="social" to={github} 
	        	  title="link to github"
	        	  aria-label="go to the github account" >Github</Link>
    	</section>
    	
	)
}


export default Social;