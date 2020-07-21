import React from 'react';
import Card from './Card';

const Works = () => {

	return (
	<>
    <section className="main-works">
      <h2 id="projects" className="neon-purple">Projects</h2> 
        <Card  
          title="Portfolio 2020" 
          content="A static portfolio build with Reactjs."
          skills="Stack: React - CSS - Netlify"
          url="https://github.com/S0f1eM/portfolio-2020"
        />
        <Card  
          title="MoodColors template" 
          content="A Template I build with react-semantic-ui to test its work process."
          skills="Stack : React - semantic-ui"
          url="http://moodcolors.surge.sh/"
        />
        <Card  
          title="Full CSS Portfolio" 
          content="My 2019 portfolio : A full CSS portoflio made with Flexbox and no JS."
          skills="Stack : CSS3 - Flexbox - HTLM5 "
          url="https://flexbox-portfolio.surge.sh"
        />
        <Card 
          title="IUEM WordPress Websites" 
          content="The main website of my first profesionnal project with WordPress."
          skills="Stack : HTML - LESS - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"
        />
        <Card 
          title="Bootstrap parallax" 
          content="A responsive portfolio made with bootstrap in 2016."
          skills="Stack : HTML5 - CSS3 - jQuery - Bootstrap"
          url="https://bootstrap-portfolio.surge.sh "
        />
        <Card 
          title="WordPress Plugin" 
          content="Building a WordPress directory plugin to manage the directory from WP dashboard (php & MySQL)."
          skills="Stack : PHP - MySQL - JavaScript - HTML - CSS"
          url="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <Card 
          title="Update Assistant Manager" 
          content="Script bash with wp-cli to update WordPress multisites."
          skills="Tools : Bash - wp-cli"
          url="https://github.com/S0f1eM/wordpress-update-manager"
        />
        <Card 
          title="All my repositories..." 
          content="...on Github."
          url="https://github.com/S0f1eM/"
        />
      </section>
    </>
	)
}


export default Works;