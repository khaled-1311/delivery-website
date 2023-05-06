import React from 'react';
import Section from '../UI/Section';
import Contaienr from '../UI/Container';
import Svg from '../UI/Svg';
import Link from '../re-usable/Link';

import '../../sass/main.scss';

const Home = props => {
	return (
		<Section className="home" id="home">
			<Contaienr section="home">
				<Svg icon="home" viewBox="0 0 554 325" className="home__img" />

				<div className="home__data">
					<h1 className="home__title">
						Order Products <br />
						Faster Easier
					</h1>

					<p className="home__description">
						Order your favorite foods at any time and we will deliver them right
						to where you are.
					</p>

					<Link href="#">Get Started</Link>
				</div>
			</Contaienr>
		</Section>
	);
};

export default Home;
