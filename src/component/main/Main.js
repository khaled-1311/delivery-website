import React from 'react';
import Home from './Home';
import About from './About';
import Security from './Security';
import Services from './Services';
import App from './App';
import Contact from './Contact';

import '../../sass/main.scss';

const Main = props => {
	return (
		<main className="main">
			<Home />
			<About />
			<Security />
			<Services />
			<App />
			<Contact />
		</main>
	);
};

export default Main;
