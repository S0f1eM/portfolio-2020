import React from 'react';
import Card from './Card';

const Works = () => {

	return (
	<>
    <h2 id="projects">Projects</h2> 
      <section className="main-works">
        
        <Card  
          title="Portfolio 2020" 
          content="This portfolio build with Reactjs."
          more="A static website made with react."
          url="https://github.com/S0f1eM/portfolio-2020"
        />
        <Card 
          title="My React Playground" 
          content="A website I use to test and play with React features and with redux, hooks and API..."
          url="https://sophie-react-playground.surge.sh"
        />
        <Card  
          title="MoodColors template" 
          content="A Template I build with react-semantic-ui to test its work process."
          url="http://moodcolors.surge.sh/"
        />
        <Card  
          title="Full CSS Portfolio" 
          content="My 2019 portfolio : A full CSS portoflio made with Flexbox."
          more="Minimalist site with no JS."
          url="https://flexbox-portfolio.surge.sh"
        />
        <Card 
          title="IUEM WordPress Websites" 
          content="The main website of my first profesionnal project with WordPress."
          more="Integration with Less, PHP, MySQL."
          url="https://www-iuem.univ-brest.fr"
        />
        <Card 
          title="ISBlue WordPress Website" 
          content="Profesionnal project : A WordPress website to set up in short term contract."
          more="Collection of informations and contents, integration & CSS."
          url="https://www.isblue.fr"
        />
        <Card 
          title="WordPress Plugin" 
          content="Building a WordPress directory plugin to manage the directory from WP dashboard (php & MySQL)."
          url="https://github.com/S0f1eM/my-first-wp-plugin"
        />
        <Card 
          title="Update Assistant Manager" 
          content="Script bash with wp-cli to update WordPress multisites."
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