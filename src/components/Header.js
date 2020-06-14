import React from 'react';


const Header = () => {
	const myName = 'Sophie Marchand';
	const urlResume = '';

	return (
	<div>
     <header className="main-header" id="SMheader">
     	<nav className="navigation">
        	<ul className="menu">
        		<li className="myName">
        			<a href="#SMheader" rel="noopener noreferrer">{myName}</a>
        		</li>
        		<li className="smcolors"><a href="#SMworks" rel="noopener noreferrer">Works</a></li>
        		<li className="smcolors"><a href={urlResume} rel="noopener noreferrer">Resume</a></li>
        		<li className="smcolors"><a href="#SMcontact" rel="noopener noreferrer">Contact</a></li>
        	</ul>
       	</nav>
      </header>
    </div>
	)
}


export default Header;