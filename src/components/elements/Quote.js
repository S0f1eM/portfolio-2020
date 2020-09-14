import React from 'react';

const Quote = props => {

	return (
  <>
    <section className="bottom-page">   
        <div className="pattern large" aria-hidden="true"></div>
        <p className="quote-content">{props.quote}</p>
        <p className="quote-content">{props.more}</p>
    </section>
  </>
	)
}


export default Quote;
