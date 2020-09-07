import React from 'react';
import ProjectCard from './ProjectCard';

const Works = () => {

	return (
	<>
    <section className="main-works">
      <h2 id="projects">Some works</h2> 
        <ProjectCard  
          title="Portfolio 2020" 
          img="darkmode-portfolio.png"
          content="A static portfolio with a darkmode build with React. Deployed with Netlify (CI with github)."
          skills=" React - CSS - Netlify"
          url="/"
          github="https://github.com/S0f1eM/portfolio-2020"
        />
        <ProjectCard  
          title="MoodColors template" 
          img="screenshot-MoodColors.png"
          content="A Template for a blog or a showcase website made with react-semantic-ui made to test it."
          skills=" React - react-semantic-ui"
          url="http://moodcolors.surge.sh/"
          github="https://github.com/S0f1eM/neon-template"
        />
        <ProjectCard 
          title="Directory WP Plugin" 
          img="plugin-directory.png"
          content="A WordPress directory plugin to manage a researchers directory (php & MySQL) and show employee's data on the new wordpress websites. I made it during my first developer job."
          skills=" PHP - MySQL - JavaScript"
          url="https://www-iuem.univ-brest.fr/annuaire/"
          github="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <ProjectCard 
          title="IUEM Websites" 
          img="screenshot-iuem.png"
          content="A university institute websites with WordPress. On the same template there were also 3 laboratories partners websites : Lemar, Geosciences Ocean and Amure."
          skills=" HTML - LESS - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"

        />
        <ProjectCard 
          title="Bootstrap Portfolio" 
          img="bootstrap-portfolio.png"
          content="A responsive portfolio made from scratch with bootstrap after my developer bootcamp in 2016."
          skills=" HTML5 - CSS3 - jQuery - Bootstrap"
          url="https://bootstrap-portfolio.surge.sh "
          github="https://github.com/S0f1eM/Bootstrap-portfolio"
        />
        <ProjectCard  
          title="Flexbox Portfolio"
          img="flexbox-portfolio.png" 
          content="A developer portfolio made from scratch with Flexbox & only CSS. It was a personal no JS challenge for my 2019 portfolio."
          skills=" CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
          github="https://github.com/S0f1eM/portfolio-full-css"
        />
      </section>
    </>
	)
}


export default Works;