import React from 'react';

const Quote = props => {

	return (
  <>
    <section className="bottom-page">   
        <div className="pattern large" aria-hidden="true"></div>
        <blockquote className="quote-content">{props.quote}</blockquote>
        <blockquote className="quote-content">{props.more}</blockquote>
    </section>
  </>
	)
}


export default Quote;
