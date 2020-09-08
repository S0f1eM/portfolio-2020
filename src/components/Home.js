import React from 'react';
import ProjectCard from './ProjectCard';
import { Link } from 'react-router-dom';


const Home = () => {

	return (
	<>
    <div className="pattern large"></div>
      <div className="About-me">
        <p>Hello, I'm Sophie. I'm a creative developer who love <span>Frontend development</span>. 
        I have professional experiences in <span>full stack development</span>, with <span>CMS</span> like <span>WordPress</span> and also in <span>project management</span>.<span className="mobile"> I can be part in every step of the creative process for a website redesign, 
        from the writing of the specifications through a plugin development to the delivery in production.</span></p>
    </div>

    <section className="main-works">
      <h2 id="projects">Some works</h2> 
        <ProjectCard 
          title="IUEM Websites" 
          img="screenshot-iuem.png"
          skills=" HTML - LESS - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"
        />
        <ProjectCard  
                title="Semantic UI Template" 
                img="screenshot-MoodColors.png"
                skills=" React - react-semantic-ui"
                url="http://moodcolors.surge.sh/"
                github="https://github.com/S0f1eM/neon-template"
        />
        <ProjectCard  
          title="Minimalist full CSS Portfolio"
          img="flexbox-portfolio.png" 
          skills=" CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
          github="https://github.com/S0f1eM/portfolio-full-css"
        />

        <div className="see-more-block">
              <Link to="/Portfolio"  
                   aria-label="go to portfolio" 
                   className="see-more"
                   rel="noopener noreferrer">SEE MORE WORKS ON MY PORTFOLIO</Link>
        </div>
      </section>
    </>
	)
}


export default Home;
