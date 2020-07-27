import React from 'react';



const ResumeCard = props => {

	return (
    <div className="card">
        <h3 className="neon-blue">{props.title}</h3>
          <p>{props.company}</p>
          <i>{props.date}</i>
          <p>{props.intro}</p>
          <p>{props.content}</p>
          <p>{props.works}</p>
          <p>{props.tasks}</p>
          <p className="dark-purple">{props.skills}</p>
          <p>{props.more}</p>
    </div>
	)
}


export default ResumeCard;
