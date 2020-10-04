import React from 'react';
import ResumeCard from './elements/ResumeCard';
import Button from './elements/Button';
import SectionHeader from './elements/SectionHeader';
import Quote from './elements/Quote';

const About = props => {

	const responsive="https://www.freecodecamp.org/certification/s0f1e/responsive-web-design";
	const javascript="https://www.freecodecamp.org/certification/s0f1e/javascript-algorithms-and-data-structures";
	const frontend="https://www.freecodecamp.org/certification/s0f1e/front-end-libraries";

	const content="I believe it's important to support people and give them the means to develop as individuals while growing among other people, including on virtual place like the web.  I'm in search of a team where 'flow' human values like respect and empathy and 'act' trully on that way.";
	const quote=`"No need to hurry. No need to sparkle. No need to be anybody but Oneself." Virginia Woolf`;

	return (		
    <>
		<section className="main-xp" role="main">

			<SectionHeader content={content} />
					
			<h2 className="xp-and-skills" id="about" tabindex="0">Developer Resume</h2>
	    
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
			       	tasks="2017: Users support on about 40 websites build with Plone CMS (CSS, JS, Python)."
			   		skills="Stack : WordPress, MySQL, PHP, JavaScript, jQuery, Less, Python..."
			/>
		
				<aside>
			<section className="education">
				<h2 className="xp-and-skills" tabindex="0">Education</h2>
				<ResumeCard 	
				    	title="2016 - Web Developer Certification"	
					    date="Bootcamp with Simplon.co (apr. 2016 - nov. 2016)"
	               		intro="Learning basics : HTML5, CSS (Bootstrap), JavaScript (ES5), database, frameworks, versioning..."
	            />
	            <ResumeCard 	
				    	title="2005 - History of Societies & Archeology Bachelor's degree"	
					    date=" 2005 - Faculty of Arts, Humanities and Social Sciences - UBS"
	            />
			</section> 

			<section className="skills-interests">
				<h2 className="xp-and-skills" tabindex="0">Skills & Interests</h2>
					<div className="selfstudy">
				    	<h3 tabindex="0">Self study </h3>
		                	<p tabindex="0"><span className="lightgrey">Programming : </span> Javascript ES6/ES7, API, OOP, functionnal programming, CSS Grid, Flexbox, A11y...</p>
		                	<p tabindex="0"><span className="lightgrey">Libraries, frameworks & tools :</span> React, Redux, React Native (currently learning)...</p>
		                	<p tabindex="0"><span className="lightgrey">Online Certifications :</span> <a rel="noopener noreferrer" href={responsive}>FreeCodeCamp Responsive web design certification</a>,  
		                	<a rel="noopener noreferrer" href={javascript}> JavaScript Algorithms certification</a> & <a rel="noopener noreferrer" href={frontend}>Front-End Libraries Certification</a>, <a href="https://www.udemy.com/certificate/UC-7PDYNLAQ/">React with Redux</a></p>
			    	</div>

			    	<div className="language">
				    	<h3 tabindex="0">Languages </h3>
				    	<p tabindex="0">English <span className="lightgrey">(Proficient)</span> - French <span className="lightgrey">(Native)</span></p>
			    	</div>

			    	<div className="Interests">
				    	<h3 tabindex="0">Interests </h3>
				    	<p tabindex="0">Pixar fan, sciences-fiction, I read various genre of books, onboard & video games, walks in the nature to recharge batteries, staring at the stars and sunsets...</p>
			   		</div>		   		
		  	</section>
		</aside>

	  	<Button  link="/Portfolio" 
              	 label="go to portfolio" 
                 text="VIEW MY PORTFOLIO"
                 className="see-more" 
        />

		</section>

	

        <Quote quote={quote} />

	</>
	)
}


export default About;
