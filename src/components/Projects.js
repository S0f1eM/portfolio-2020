import React from 'react';
import ProjectCard from './ProjectCard';

const Works = () => {

	return (
	<>
    <section className="main-works">
      <h2 id="projects">Some works</h2> 
        <ProjectCard  
          title="Personal website 2020" 
          img="darkmode-portfolio.png"
          content="A static portfolio with a darkmode build with React. Deployed with Netlify (CI with github)."
          skills=" React - CSS - Netlify"
          url="/"
          github="https://github.com/S0f1eM/portfolio-2020"
        />
        <ProjectCard  
          title="Semantic UI Template" 
          img="screenshot-MoodColors.png"
          content="A Template for a blog or a showcase website made with react-semantic-ui made to test it."
          skills=" React - react-semantic-ui"
          url="http://moodcolors.surge.sh/"
          github="https://github.com/S0f1eM/neon-template"
        />
        <ProjectCard 
          title="Directory Manager WP Plugin" 
          img="plugin-directory.png"
          content="A WordPress directory plugin to manage a researchers directory (php & MySQL) and show employee's data on the new wordpress websites. You can manage the directory from the dashboard (add, remove, update) and you can add it on page with a shortcode. I made it during my first developer job."
          skills=" PHP - MySQL - JavaScript"
          url="https://www-iuem.univ-brest.fr/annuaire/"
          github="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <ProjectCard 
          title="IUEM & 3 laboratories Websites" 
          img="screenshot-iuem.png"
          content="A university institute website with WordPress for my first developer job. On the same template I build also 3 laboratories partners websites : Lemar, Geosciences Ocean and Amure."
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
          title="A Minimalist full CSS Portfolio"
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