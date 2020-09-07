import React from 'react';
import ResumeCard from './ResumeCard';

const Resume = props => {

	const responsive="https://www.freecodecamp.org/certification/s0f1e/responsive-web-design";
	const javascript="https://www.freecodecamp.org/certification/s0f1e/javascript-algorithms-and-data-structures";
	const frontend="https://www.freecodecamp.org/certification/s0f1e/front-end-libraries";

	return (		
    <>
		<section className="main-xp">
			<h2 className="xp-and-skills" id="resume">Developer Resume</h2>
				<div className="pattern small"></div>
			    <p className="resume-intro">I'm a serious, available and enthusiastic coworker who brings a good mood and humour to the place. 
	I believe that it's important to support people and give them the means to develop as individuals while growing among other people. I blossom in a company where flow the same mindset of human values, surrounding by genuine and empathic people.</p>
			   	<div className="pattern small"></div>

			    <ResumeCard 
			        title="Analyst Developer" 
			        date="oct. 2019 - today"
			        company="Company : ASI (IT and consulting company)"
			        intro="Missions on various bank companies intranets implemented templates & portlets with Jalios CMS."
			        content="Collaborated with designers to create clean interfaces and intuitive interactions."
			        skills="Stack : Java, jsp, Less, jQuery, JIRA, Jenkins (CI/CD), Eclipse, Gitlab..."
			    />
			    <ResumeCard 
			        title="Web Developer" 
			        date=" feb. 2017 - dec. 2018 (2 years)"
			        company="Organisation : IUEM - National education (public official contract)"
			        intro="My first job, it was a great challenge as a junior developer."
			       	content="2017: Users support on Plone CMS (CSS, JS, Python). Fixing CMS bugs on several websites (about 40 websites for the institutes and the partners), CSS and content adjustments on new Plone intranet."
			      	works=" 2018: Project management and developement on the main website and the 3 main laboratories websites rebuild."
			       	tasks="Migration from Plone websites to Wordpress environment. Integration of the design with a page builder selected by the graphist. Build and implementations of custom contents (CPT) for the specifics needs of each partner."
                    more="Development of a custom plugin for the university directory database (postgre to MySQL, PHP, JavaScript)."
			   		skills="Stack : WordPress, MySQL, PHP, JavaScript, jQuery, Less, Python..."

			    />
		</section>

		<section className="education">
			<h2 className="xp-and-skills" id="resume">Education</h2>
			    <ResumeCard 	
			    	title="2016 - Web Developer Certification"	
				    date="Bootcamp with Simplon.co (apr. 2016 - nov. 2016)"
               		content="Learning basics : HTML5, CSS (Bootstrap), JavaScript (ES5), versioning."
               		more="Introduction to mySQL, PHP, React, Vim..."
                />
			</section> 

		<section className="skills-interests">
			<h2 className="xp-and-skills" id="resume">Skills & Interests</h2>
		    	<h3>Self study </h3>
		    	<hr/>
                	<p> Javascript ES6/ES7, API, OOP, functionnal programming, CSS Grid, Flexbox, A11y...</p>
                	<p>Frameworks and tools : React, Redux, Node, React Native (currently learning)...</p>
                	<p>Online Certifications : <a rel="noopener noreferrer" href={responsive}>FreeCodeCamp Responsive web design certification</a>,  
                	<a rel="noopener noreferrer" href={javascript}> JavaScript Algorithms certification</a> & <a rel="noopener noreferrer" href={frontend}>Front-End Libraries Certification</a>, <a href="https://www.udemy.com/certificate/UC-7PDYNLAQ/">React with Redux</a></p>
		    	<h3>Languages </h3>
		    	<hr/>
		    		<p>English (Proficient)</p>
		    		<p> French (Native)</p>
		    	<h3>Interests </h3>
		    	<hr/>
		    		<p>Fitness, Pixar fan, love sciences-fiction movies, I read all genre of books (depending on my current interest), onboard games and video games, walks on the beach, sunsets...</p>
		   	</section>
	</>
	)
}


export default Resume;