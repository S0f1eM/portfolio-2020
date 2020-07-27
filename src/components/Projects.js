import React from 'react';
import ProjectCard from './ProjectCard';

const Works = () => {

	return (
	<>
    <section className="main-works">
      <h2 id="projects" className="neon-purple">Some projects</h2> 
        <ProjectCard  
          title="Portfolio 2020" 
          img="darkmode-portfolio.png"
          content="A static portfolio build with Reactjs with a darkmode. Deployed with Netlify."
          skills="Technologies : React - CSS - Netlify"
          url="/"
          github="https://github.com/S0f1eM/portfolio-2020"
        />
        <ProjectCard  
          title="MoodColors template" 
          img="screenshot-MoodColors.png"
          content="A Template for a blog like or a showcase website made with react-semantic-ui for experimentation."
          skills="Technologies : React - react-semantic-ui"
          url="http://moodcolors.surge.sh/"
          github="https://github.com/S0f1eM/neon-template"
        />
        <ProjectCard  
          title="Flexbox Portfolio"
          img="flexbox-portfolio.png" 
          content="A developer portfolio made with Flexbox and no JS."
          skills="Technologies : CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
          github="https://github.com/S0f1eM/portfolio-full-css"
        />
        <ProjectCard 
          title="IUEM Websites" 
          img="screenshot-iuem.png"
          content="A university institute websites with WordPress. On the same template there were also 3 laboratories partners websites : Lemar, Geosciences Ocean and Amure."
          skills="Technologies : HTML - LESS - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"

        />
        <ProjectCard 
          title="Bootstrap Portfolio" 
          img="bootstrap-portfolio.png"
          content="A responsive portfolio made with bootstrap in 2016 after my developer bootcamp. my first one. I refactored a bit."
          skills="Technologies : HTML5 - CSS3 - jQuery - Bootstrap"
          url="https://bootstrap-portfolio.surge.sh "
          github="https://github.com/S0f1eM/Bootstrap-portfolio"
        />
        <ProjectCard 
          title="Directory WP Plugin" 
          img="plugin-directory.png"
          content="A WordPress directory plugin to manage a directory (php & MySQL) and show employee's data on the new wordpress websites. I made it during my first developer job."
          skills="Technologies : PHP - MySQL - JavaScript"
          github="https://github.com/S0f1eM/my-first-wp-plugin"
        />
      </section>
    </>
	)
}


export default Works;