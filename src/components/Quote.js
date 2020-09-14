import React from 'react';

const Quote = props => {

	return (
  <>
    <section className="bottom-page">        
        <div className="quote-content">{props.quote}</div>
        <div className="pattern large" aria-hidden="true"></div>
    </section>
  </>
	)
}


export default Quote;
