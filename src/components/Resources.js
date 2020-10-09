import React from 'react';
import Source from './elements/Source';
import Button from './elements/Button';
import SectionHeader from './elements/SectionHeader';
import Quote from './elements/Quote';


const Resources = () => {
	const content = "Some links to useful content and websites to feed curiosity, open 'perspectives' and keep on learning. You will find resources about accessibilty, UI/UX design and a section on subjects I find interesting and teaching.";				
    const quote = `"Without leaps of imagination, or dreaming, we lose the excitment of possibilities. Dreaming, after all, is a form of planning." Gloria Steinem`;

	return (
		<>
			<section className="resources" id="resources" role="main">
				
				<SectionHeader content={content} />
				
				<div className="portfolio-list accessibility">
					
					<div className="accessibility">
						<h2 tabindex="0">A11y resources</h2>
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
					    <Source title="Accessibility & Me"
					    		url="https://a11y.me/"
					    		intro="A good collection of resources to start on web accessibility."
					    />
					</div>

					<div className="design">
					    <h2 className="resources-title" tabindex="0">Design resources</h2>
						<Source title="10 Newest and promising UI design trends" 
							  url="https://uxdesign.cc/10-newest-and-promising-ui-design-trends-929562b25ad6" 
							  intro="New neumorphism, pastels, geometry and helpful tips." 
					    />
					    <Source title="4 Ways to Implement Data For A Better User Experience Design"
					    		url="https://www.freecodecamp.org/news/4-ways-to-implement-data-for-a-better-user-experience-design/"
					    		intro="Explore experience around data, to make data easier to work with and how data enriches our work and lives."
					    />
					    <Source title="7 Practical Tips for Cheating at Design"
					    url="https://medium.com/refactoring-ui/7-practical-tips-for-cheating-at-design-40c736799886"
					    intro="Improving your designs with tactics instead of talent."
					    />
					</div>

				    <div className="development">
				    	<h2 className="resources-title" tabindex="0">Dev & Tools</h2>
				    		<Source title="Next.js 101: What you should know"
				    				url="https://www.netlify.com/blog/2020/06/18/next.js-101-what-you-should-know/?utm_campaign=Netlify+Newsletter+-+June+2020+-+1&utm_content=Netlify+Newsletter+-+June+2020+A&utm_medium=email_action&utm_source=customer.io"
				    				intro="What features should I know about Next.js." 
				    		/>
							<Source title="How to Build a Bot and Automate your Everyday Work" 
								  url="https://www-freecodecamp-org.cdn.ampproject.org/c/s/www.freecodecamp.org/news/building-bots/amp/" 
								  intro="This article explore the basics of workflow automation using Python." 
							/>
							<Source title="VIDEO : Free 5-hour WordPress and PHP Course" 
							      url="https://www.freecodecamp.org/news/build-a-website-from-start-to-finish-using-wordpress-and-php/"
							      intro="How to Build a Website from Start to Finish: Free 5-hour WordPress and PHP Course." 
							/>
							<Source title="21 Performance Optimization Techniques for React Apps"
									url="https://www.codementor.io/blog/react-optimization-5wiwjnf9hj"
									intro="Optimize your React application's performance with these 21 techniques. " 
							/>
							<Source title="Understand legacy Code"
									url="https://understandlegacycode.com/"
									intro="Useful tips and concrete advice that will help you tame the legacy codebase you've inherited." 
							/>
				
					</div>

					<div className="curiouser">
						<h2 className="resources-title" tabindex="0">Keep on growing</h2>
							<Source title="Center for Humane Technology" 
							      url="https://www.humanetech.com/take-control" 
							      intro="A platform who focus on means to enable an ethical transition to more humane social media platforms by changing the ways that these technologies are designed, used, and regulated." 
							/>
							<Source title="NESS LABS" 
							      url="https://nesslabs.com/flexible-consistency?mc_cid=21cc8fb4d8&mc_eid=6ecf7ac759" 
							      intro="Articles and a newsletter for your mind with neuroscience-based content and conversations." 
							/>
							<Source title="TALK : The power of vulnerability"
								url="https://www.ted.com/talks/brene_brown_the_power_of_vulnerability"
								intro="Brené Brown studies human connection -- our ability to empathize, belong, love." 
							/>
							<Source title="TALK : 5 ways to listen better"
									url="https://www.ted.com/talks/julian_treasure_5_ways_to_listen_better"
									intro="In this talk, Treasure shares five ways to re-tune your ears for conscious listening -- to other people and the world around you."
							/>
							<Source title="TALK : The breathtaking courage of Harriet Tubman"
									url="https://www.ted.com/talks/janell_hobson_the_breathtaking_courage_of_harriet_tubman"
									intro="Janell Hobson details Harriet Tubman's many fights for freedom." 
						    />
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