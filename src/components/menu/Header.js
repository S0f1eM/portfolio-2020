import React from 'react';

const Header = props => {

      // A implementer pour le darkmode :
      //     <li className="theme-switch-wrapper">
      //         <label className="theme-switch" for="checkbox">
      //           <input type="checkbox" id="checkbox"/>
      //           <div className="slider round"></div>
      //         </label>
      //       </li>

	return (
    <header className="main-header" id="smHeader">
     	<nav className="navigation">
        <ul className="menu">
        	<li className="myName"><a href="#smHeader" rel="noopener noreferrer">Sophie M.</a></li>
        	<li className="smcolors"><a href="#smWorks" rel="noopener noreferrer">Works</a></li>
        	<li className="smcolors"><a href="#smAbout" rel="noopener noreferrer">About</a></li>
        	<li className="smcolors"><a href="#smContact" rel="noopener noreferrer">Contact</a></li>
        </ul>
      </nav>
      <div className="about-me">
        <p>I am a french developer who love front-end development. I had worked with various CMS and love coding with Javascript. I search for a professionnal project to evolve and to keep growing with great people.<br/>
           Remote job are more than welcomed. I would be thrilled to work with a international team and sharing our cultural diversities with my teamates.</p>
      </div>
    </header>
	)
}


export default Header;