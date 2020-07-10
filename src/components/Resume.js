import React from 'react';
import Card from './Card';

const Resume = props => {

	const responsive="https://www.freecodecamp.org/certification/s0f1e/responsive-web-design";
	const javascript="https://www.freecodecamp.org/certification/s0f1e/javascript-algorithms-and-data-structures";

	return (		
    <>
	    <h2 className="xp-and-skills" id="resume">Developer Resume</h2>

		    <section className="main-xp">
			    <Card 	title="Analyst Developer" 
			          	date="oct. 2019 - today"
			          	company="ASI (IT and consulting company)"
			         	intro="Missions on various bank companies intranets implemented templates & portlets with Jalios CMS."
			         	content="Collaborated with designers to create clean interfaces and intuitive interactions."
			         	skills="Java, jsp, Less, jQuery, JIRA, Jenkins, Eclipse, Gitlab..."
			    />
	{/*		    <Card   title="Mission Officer" 
			          	date=" feb. 2019"
			          	company="IUEM - National education (public official contract)"
			          	content="Setting up of the ISBlue website with WordPress CMS and plugins with a short deadline."
			          	more="Collection of informations and contents, integration & CSS."
			    />*/}
			    <Card   title="Web Developer" 
			          	date=" feb. 2017 - dec. 2018 (2 years)"
			          	company="IUEM - National education (public official contract)"
			          	intro="Full stack development, project management and users support."
			          	content="2017: Users support on Plone CMS (CSS, JS, Python). Fixing bug, CSS and content on new intranet."
			          	works=" 2018: Project management and developement on the 4 main sites rebuild."
			          	tasks="Migration from Plone to Wordpress, integration of the design, built and implemented custom contents (CPT)."
			          	skills="Reports for management and documentations for IT department and users."
                        more="Development of a custom plugin for the university directory database (postgre to MySQL, PHP, JavaScript)."
			    />
			</section>

		<h2 className="xp-and-skills" id="resume">Education</h2>
		    <section className="main-xp">
			    <Card 	title="2016 - Web Developer Certification"	
					    date="Bootcamp with Simplon.co (apr. 2016 - nov. 2016)"
                		content="Learning basics : HTML5, CSS (Bootstrap), JavaScript (ES5), versioning."
                		more="Introduction to mySQL, PHP, React, Vim..."
                />
			</section> 

		<h2 className="xp-and-skills" id="resume">Skills & Interests</h2>
		    <section className="main-xp">
		    	<h4>Languages :</h4>
		    		<p>English (proficient), french (native).</p>
		    	<h4>Self study :</h4>
                	<p> Javascript : ES6/ES7, API, OOP, functionnal programming, clean code...</p>
                	<p>Frameworks and tools : React, Redux, Node, GraphQL (still learning)...</p>
                	<p>Online Certifications : <a rel="noopener noreferrer" href={responsive}>FreeCodeCamp Responsive web design certification</a> & 
                	<a rel="noopener noreferrer" href={javascript}> JavaScript Algorithms certification</a></p>
		    	<h4>Interests :</h4>
		    		<p>Fitness, Pixar and sciences-fiction movies, reading books (all genre depending on my current interest), onboard games and video games (with friends and family), walk on the beach and in the hood...</p>
		   	</section>
	</>
	)
}


export default Resume;