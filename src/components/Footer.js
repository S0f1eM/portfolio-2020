import React from 'react';


const Footer = () => {
	const github = "https://github.com/S0f1eM";
	const twitter = "https://twitter.com/S0f1eM?lang=fr";
	const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
	const codepen = "https://codepen.io/s0ph1/#";

	return (
     <footer className="main-footer">
        <p><a href={github} alt="github" target="_blank" rel="noopener noreferrer" >Github</a></p>
        <p><a href={codepen} alt="codepen" target="_blank" rel="noopener noreferrer" >Codepen</a></p>   
        <p><a href={linkedin} alt="linkedin" target="_blank" rel="noopener noreferrer" >Linkedin</a></p>   
        <p><a href={twitter} alt="twitter" target="_blank" rel="noopener noreferrer" >Twitter</a></p>
      </footer>
	)
}


export default Footer;