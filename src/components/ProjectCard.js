import React from 'react';



const ProjectCard = props => {

  const repo = props.github ? 'Github' : '';
  const website = props.url ? 'Website' : '';

	return (
    <div className="card">
        <img  
          src={props.img} 
          alt={props.title} 
          className="smcard-img"
        />
        <h3>{props.title}</h3>
          <p>{props.content}</p>
          <p><b className="beBold">Technologies</b> : {props.skills}
          </p>
          <p>
          <a href={props.url} 
             target="_blank" 
             rel="noopener noreferrer" 
             aria-label={props.content}
             className="card_website beBold"
          >{`${website}`}</a>
          <a href={props.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label={props.content}
              className="card_github beBold"
          > {`${repo}`}</a>
          </p>
    </div>
	)
}


export default ProjectCard;
