import React from 'react';



const ProjectCard = props => {

  const repo = props.github ? 'Github' : '';
  const website = props.url ? 'Website' : '';

  const displayImg =props.img ? <img src={props.img} alt={props.title} loading="lazy" className="smcard-img"/>
 : '';

	return (
    <div className="card portfolio">
      {displayImg}
        <div className="content">
          
          <h3>{props.title}</h3>
          <p><span className="techno"> {props.skills}</span></p>
          <p>{props.content}</p>    
          <div className="footer-card">
            <p className="links">
              <a href={props.url} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label={props.content} 
                 className="card_website beBold">{`${website}`}</a>
              <a href={props.github} 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 aria-label={props.content} 
                 className="card_github beBold">{`${repo}`}</a>
            </p>
          </div>
        </div>
    </div>
	)
}


export default ProjectCard;
