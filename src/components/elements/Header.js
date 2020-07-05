import React from 'react';
import { Link } from 'react-router-dom';


const Header = props => {

	return (
    <header className="main-header">
     	<nav className="navigation">
        <ul className="menu">
        	<li className="myName">
            <a  href={props.home} 
                aria-labelledby="go to top of the page"
                rel="noopener noreferrer">SM</a>
          </li>
        	<li className="smcolors">
            <a  href={props.projects} 
                aria-labelledby="go to projects section" 
                rel="noopener noreferrer">Projects</a>
          </li>
        	<li className="smcolors">
            <Link to={props.about} title="link to resume" 
                  aria-labelledby="go to resume section"
                  rel="noopener noreferrer">About
           </Link>
          </li>
        	<li className="smcolors">
            <a  href={props.contact} 
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