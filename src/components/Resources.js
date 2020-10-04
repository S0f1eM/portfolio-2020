import React from 'react';
import Source from './elements/Source';
import Button from './elements/Button';
import SectionHeader from './elements/SectionHeader';
import Quote from './elements/Quote';


const Resources = () => {


	const content = "A collection of links to useful content and websites, not just for development but also to feed my curiosity, open 'perspectives' and keep on learning about every subject. You will find resources about accessibilty, UI/UX design and a 'Curiouser and curiouser' section with videos and articles on subjects I find interesting and teaching.";				

    const quote = `"Without leaps of imagination, or dreaming, we lose the excitment of possibilities. Dreaming, after all, is a form of planning." Gloria Steinem`;

	return (
		<>
			<section className="resources" id="resources" role="main">
				
				<SectionHeader content={content} />
				
				<div className="portfolio-list accessibility">
					
					<div className="accessibility">
						<h2 tabindex="0">A11y Resources</h2>
						<Source title="W3C WAI (Web Accessibility Initiative)" 
						      url="https://www.w3.org/WAI/fundamentals/accessibility-intro/" 
						      intro="Strategies, standards, resources to make the Web accessible to people with disabilities." />
					    <Source title="A11Y Style Guide" 
					    	  url="https://a11y-style-guide.com/style-guide/" 
					    	  intro="A guide and reference to build your own accessible components." />
					    <Source title="Accessibility First: Rethinking the Way We Approach Website Design and Development"
					    	  url="https://www.24a11y.com/2017/accessibility-first/"
					    	  intro="An article on inclusive Design and Development Principles."
					    />
					</div>

					<div className="design">
					    <h2 className="resources-title" tabindex="0">Design Resources</h2>
						<Source title="10 Newest and promising UI design trends" 
							  url="https://uxdesign.cc/10-newest-and-promising-ui-design-trends-929562b25ad6" 
							  intro="New neumorphism, pastels, geometry and helpful tips" />
					</div>

				    <div className="development">
				    	<h2 className="resources-title" tabindex="0">Dev Resources</h2>
							<Source title="How to Build a Bot and Automate your Everyday Work" 
								  url="https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/building-bots/amp/" 
								  intro="This article explore the basics of workflow automation using Python." />
							<Source title="VIDEO: Free 5-hour WordPress and PHP Course" 
							      url="https://www.freecodecamp.org/news/build-a-website-from-start-to-finish-using-wordpress-and-php/"
							      intro="How to Build a Website from Start to Finish: Free 5-hour WordPress and PHP Course." />
					</div>

					<div className="curiouser">
						<h2 className="resources-title" tabindex="0">Curiouser Resources</h2>
							<Source title="Center for Humane Technology" 
							      url="https://www.humanetech.com/take-control" 
							      intro="A platform who focus on means to enable an ethical transition to more humane social media platforms by changing the ways that these technologies are designed, used, and regulated." />
							<Source title="NESS LABS" 
							      url="https://nesslabs.com/flexible-consistency?mc_cid=21cc8fb4d8&mc_eid=6ecf7ac759" 
							      intro="Articles and a newsletter for your mind with neuroscience-based content and conversations." />
					</div>

				</div>
				    
				<Button  link="/" 
              			 label="go back to home page" 
              		     text="GO BACK TO HOME PAGE"
              			 className="see-more" 
                />

			</section>

			<Quote quote={quote} />
		</>
	)
}

export default Resources;