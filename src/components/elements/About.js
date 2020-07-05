import React from 'react';

import Header from './Header';
import Card from './Card';
import Contact from './Contact';

const About = props => {

	return (		
    <>
       	<Header home="/" projects="/" about="/About" contact="#contact" />

	    <h2 className="xp-and-skills">Developer Resume</h2>
		        <section className="main-xp">
			        <Card  
			          	title="Analyst Developer" 
			          	date="oct. 2019 - today"
			          	company='ASI (IT and consulting company)'
			         	content="Missions of several weeks on various bank companies intranets (CCI, Arkea) with Jalios CMS (Java, jsp, less, jquery). 
			         	Tools : JIRA, Jenkins, Hangout, Gitlab..."
			        />
			       	<Card  
			          	title="Mission Officer" 
			          	date=" feb. 2019"
			          	company="IUEM - National education (public official contract)"
			          	content="Setting up & integration of the Interdisciplinary graduate School for the blue planet - ISBlue website with WordPress."
			        />
			        <Card  
			          	title="Web Developer" 
			          	date=" feb. 2017 - dec. 2018 (2 years)"
			          	company="IUEM - National education (public official contract)"
			          	intro="My first professional experience as a developer was a successful challenge : I had to deal with project management, full stack development and users support on my own (no other developer in the web pole)."
			          	content=" In 2017: Web development and users support on Plone CMS (CSS, JS, Python). In 2018: project management on a rebuild websites. 4 websites Migration from Plone to Wordpress CMS, integration of the new design (CSS, Less, jQuery), build custom contents (CPT) and a custom plugin for dealing with the university directory database (postgre to MySQL, PHP, JavaScript)."
			        />
			    </section>
	    <Contact />
    </>
	)
}


export default About;