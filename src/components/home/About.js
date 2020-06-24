import React from 'react';
import Card from '../Card';



const About = props => {

	return (
     <>
        <h2 className="xp-and-skills" id="smAbout">Developer Resume</h2>
           <section className="main-xp">
	         <Card  
	          title="ANALYST DEVELOPER" 
	          date="oct. 2019 - today"
	          company='ASI (IT and consulting company)'
	          content="Missions of several weeks on various bank companies intranets (CCI, Arkea) with Jalios CMS (Java, jsp, less, jquery)."
	         />
	          <Card  
	          title="MISSION OFFICER" 
	          date=" feb. 2019"
	          company="National education (public official contract)"
	          content="Setting up & integration of the Interdisciplinary graduate School for the blue planet - ISBlue website with WordPress."
	         />
	         <Card  
	          title="WEB DEVELOPER" 
	          date=" feb. 2017 - dec. 2018 (2 years)"
	          company="National education (public official contract)"
	          intro="My first professional experience as a developer was a successful challenge : I had to deal with project management, full stack development and users support on my own (no other developer in the web pole)."
	          content=" In 2017: Web development and users support on Plone CMS (CSS, JS, Python). In 2018: project management on a rebuild websites. 4 websites Migration from Plone to Wordpress CMS, integration of the new design (CSS, Less, jQuery), build of a custom content (CPT) and a custom plugin for dealing with the university directory database (postgre to MySQL, PHP, JavaScript)."
	         />
	        </section>
      </>
	)
}


export default About;