import React from 'react';



const ResumeCard = props => {

	return (
    <div className="card">
        <h3>{props.title}</h3>
        <hr />
          <p>{props.company}</p>
          <i>{props.date}</i>
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
