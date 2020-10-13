import React from 'react';

const HomeHeader = props => {

	return (
    <header className="main-header">
      <div className="pattern large mobile" aria-hidden="true"></div>
         <div className="About-me">
          <p tabindex="0">{props.content}</p>
        </div>
    </header>
	)
}


export default HomeHeader;
