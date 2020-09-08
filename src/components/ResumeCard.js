import React from 'react';



const ResumeCard = props => {

	return (
    <div className="card resume">
        <h3>{props.title}</h3>
          <i className="date">{props.date}</i>
          <p className="company">{props.company}</p>
          <p>{props.intro}</p>
          <p>{props.content}</p>
          <p>{props.works}</p>
          <p>{props.tasks}</p>
          <p>{props.skills}</p>
          <p>{props.more}</p>
    </div>
	)
}


export default ResumeCard;
