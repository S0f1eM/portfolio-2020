import React from 'react';

const Header = props => {

	return (
    <header className="main-header" id="smHeader">
     	<nav className="navigation">
        <ul className="menu">
        	<li className="myName">
            <a  href="#smHeader" 
                aria-labelledby="go to top of the page"
                aria-current="page" 
                rel="noopener noreferrer">SM</a>
          </li>
        	<li className="smcolors">
            <a  href="#smWorks" 
                aria-labelledby="go to works section" 
                aria-current="page"
                rel="noopener noreferrer">Works</a>
          </li>
        	<li className="smcolors">
            <a  href="#smAbout"  
                aria-labelledby="go to resume section" 
                aria-current="page"
                rel="noopener noreferrer">About</a>
          </li>
        	<li className="smcolors">
            <a  href="#smContact" 
                aria-labelledby="go to the contact section" 
                aria-current="page"
                rel="noopener noreferrer">Contact</a>
          </li>
        </ul>
      </nav>
      <div className="about-me">
        <p>I am a french developer who love front-end development. 
        I had worked with various CMS and love coding with Javascript.
        I search for a professionnal project to evolve with great people. 
        Remote job are more than welcomed.  
        Collaborate with a international team would be a thrilling experience for me.</p>
      </div>
    </header>
	)
}


export default Header;