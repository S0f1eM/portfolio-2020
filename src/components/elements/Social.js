import React from 'react';
import Card from './Card';


const Social = () => {

	const linkedin = "https://www.linkedin.com/in/sophie-marchand-web-developer/";
    const twitter = "https://twitter.com/S0f1eM?lang=fr";
    const github = "https://github.com/S0f1eM";

	return (
    	<section className="profil">
	        <Card title="Github" url={github} />
	        <Card title="Linkedin" url={linkedin} />
	        <Card title="Twitter" url={twitter}  />
    	</section>
	)
}


export default Social;