import Home from './Home';
import About from './About';
import Security from './Security';
import Services from './Services';
import App from './App';
import Contact from './Contact';

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
