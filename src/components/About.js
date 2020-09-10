import React from 'react';
import ResumeCard from './elements/ResumeCard';
import Button from './elements/Button';
import Contact from './Contact';
import SectionHeader from './elements/SectionHeader';


const About = props => {

	const responsive="https://www.freecodecamp.org/certification/s0f1e/responsive-web-design";
	const javascript="https://www.freecodecamp.org/certification/s0f1e/javascript-algorithms-and-data-structures";
	const frontend="https://www.freecodecamp.org/certification/s0f1e/front-end-libraries";

	const content= "I'm one of those available and enthusiastic coworker. I can bring a good mood and humour to the place (most of the time, I stay a human being ) and also be serious and conscientious in my work.";
	const more="I believe that it's important to support people and give them the means to develop as individuals while growing among other people. I'm in search of a company where flow the same mindset of human values with respect, empathy & inclusion.";


	return (		
    <>
		<section className="main-xp">
			<h2 className="xp-and-skills" id="about">Developer Resume</h2>
			
			<SectionHeader content={content} more={more} />
						    
			<ResumeCard 
			        title="Analyst Developer" 
			        date="oct. 2019 - today"
			        company="Company : ASI Digital (IT and consulting company)"
			        intro="Missions on various bank companies intranets implemented templates & portlets with Jalios CMS."
			        content="Collaborated with designers to create clean interfaces and intuitive interactions."
			        skills="Stack : Jsp, Less, jQuery, JIRA, Jenkins (CI/CD), Eclipse, Gitlab..."
			/>
			<ResumeCard 
			        title="Web Developer" 
			        date=" feb. 2017 - dec. 2018"
			        company="European Institute for Marine Studies (IUEM)  - public official contract"
			      	intro=" 2018: Project management and developement on the main website and the 3 main laboratories websites rebuild."
			      	content="Development of a WordPress plugin to manage the directory database (postgre to MySQL, PHP, JavaScript)."
			       	works="Migration from Plone websites to Wordpress environment. Integration of the design with a page builder selected by the graphist. Build and implementations of custom contents (CPT) for the specifics needs of each partner."
			       	tasks="2017: Users support on Plone CMS (CSS, JS, Python). Fixing CMS bugs on several websites (about 40 websites for the institutes and the partners), CSS and content adjustments on new Plone intranet."
			   		skills="Stack : WordPress, MySQL, PHP, JavaScript, jQuery, Less, Python..."
			/>
		</section>

		<aside>
			<section className="education">
				<h2 className="xp-and-skills">Education</h2>
				<ResumeCard 	
				    	title="2016 - Web Developer Certification"	
					    date="Bootcamp with Simplon.co (apr. 2016 - nov. 2016)"
	               		content="Learning basics : HTML5, CSS (Bootstrap), JavaScript (ES5), versioning."
	               		more="Introduction to mySQL, PHP, React, Vim..."
	            />
			</section> 

			<section className="skills-interests">
				<h2 className="xp-and-skills">Skills & Interests</h2>
					<div className="selfstudy">
				    	<h3>Self study </h3>
		                	<p><span className="lightgrey">programming : </span> Javascript ES6/ES7, API, OOP, functionnal programming, CSS Grid, Flexbox, A11y...</p>
		                	<p><span className="lightgrey">Frameworks and tools :</span> React, Redux, Node, React Native (currently learning)...</p>
		                	<p><span className="lightgrey">Online Certifications :</span> <a rel="noopener noreferrer" href={responsive}>FreeCodeCamp Responsive web design certification</a>,  
		                	<a rel="noopener noreferrer" href={javascript}> JavaScript Algorithms certification</a> & <a rel="noopener noreferrer" href={frontend}>Front-End Libraries Certification</a>, <a href="https://www.udemy.com/certificate/UC-7PDYNLAQ/">React with Redux</a></p>
			    	</div>

			    	<div className="language">
				    	<h3>Languages </h3>
				    	<p>English <span className="lightgrey">(Proficient)</span> - French <span className="lightgrey">(Native)</span></p>
			    	</div>

			    	<div className="Interests">
				    	<h3>Interests </h3>
				    	<p>Fitness, Pixar fan, love sciences-fiction movies, I read all genre of books (depending on my current interest), onboard games and video games, walks on the beach, sunsets...</p>
			   		</div>		   		
		  	</section>
		</aside>

	  	<Button  link="/Portfolio" 
              	 label="go to portfolio" 
                 text="VIEW MY PORTFOLIO"
                 className="see-more" 
        />
        <Contact />
	</>
	)
}


export default About;