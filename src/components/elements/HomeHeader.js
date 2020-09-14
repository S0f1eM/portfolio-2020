import React from 'react';
import Button from './Button';


const HomeHeader = () => {

	return (
    <header className="main-header">
      <div className="pattern large" aria-hidden="true"></div>
         <div className="About-me">
          <p>Hello, I'm Sophie. I'm a creative developer who love <span>Frontend development</span>. 
          I have professional experiences in <span>full stack development</span>, with <span>CMS</span> like <span>WordPress</span> and also in <span>project management</span>.<span className="mobile"> I can be part in every step of the creative process for a website redesign, 
          from the writing of the specifications through a plugin development to the delivery in production.</span></p>
        </div>
      <Button  link="/About" 
              label="go to about page" 
              text="READ MORE ABOUT ME"
              className="see-more" 
      />
    </header>
	)
}


export default HomeHeader;
