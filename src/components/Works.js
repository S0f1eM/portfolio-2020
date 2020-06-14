import React from 'react';
import Card from './Card';

const Works = props => {
      //ajouter les props au card

	return (
	<div className="smSpaceAround">
    <h2 className="someWorks">Some Works</h2>
      
      <section className="main-works" id="SMworks">

        <Card  
          name="Portfolio 2020" 
          content="This portfolio made with reactjs."
          techno="React && Redux"
          url="https://github.com/S0f1eM/portfolio-react-2020/"
        />
       	
        <Card  
          name="MoodColors" 
          content="React Template with react-semantic-ui."
          techno="React"
          url="http://moodcolors.surge.sh/"
        />
        <Card  
          name="Portfolio 2019" 
          content="Minimalist & full CSS portoflio."
          techno="Flexbox"
          url="http://sophie-marchand-2019.surge.sh/"
        />
        <Card 
          name="Portfolio 2016" 
          content="First portfolio from scratch with parallax."
          techno="Bootstrap - Javascript"
          url="https://github.com/S0f1eM/portfolio-parallax-2016"
        />
         <Card 
          name="Personal playground" 
          content="Playing with React, redux, API..."
          techno="React - redux - axios - API"
          url="https://sophie-react-on.netlify.app/"
        />
        <Card 
          name="IUEM WordPress websites" 
          content="Setting up 4 WordPress site and plugins."
          techno="WordPress - PHP - MySQL"
          url="https://www-iuem.univ-brest.fr"
        />
        <Card 
          name="WP Directory Plugin" 
          content="Building a Directory Plugin to manage the directory from WP dashboard."
          techno="WordPress - PHP - MySQL"
          url="https://www.umr-amure.fr/annuaire/"
        />
        <Card 
          name="WordPress Update Assistant Manager" 
          content="Script for updating WordPress multisites with wp-cli."
          techno="wp-cli - bash"
          url="https://github.com/S0f1eM/wordpress-update-manager"
        />
        <Card 
          name="My works repositories..." 
          content="...on Github."
          url="https://github.com/S0f1eM/"
        />
      </section>
    </div>
	)
}


export default Works;