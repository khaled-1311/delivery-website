import Section from '../UI/Section';
import Contaienr from '../UI/Container';
import Link from '../re-usable/Link';
import icons from '../../img/icons.svg';
import Svg from '../UI/Svg';

const App = () => {
	return (
		<Section className="app">
			<Contaienr section="app">
				<div className="app__data">
					<h2 className="section__title-center">
						Watch Your Delivery <br />
						At Any Time
					</h2>
					<p className="app__description">
						With our app you can view the route of your order, from our local
						headquarters to the place where you are. Look for the app now!
					</p>

					<div className="app__buttons">
						<Link href="#" className="button__flex button__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24">
								<use href={`${icons}#apple-store`}></use>
							</svg>
							<span>App Store</span>
						</Link>

						<Link href="#" className="button__flex button__icon">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								width="24"
								height="24">
								<use href={`${icons}#play-store`}></use>
							</svg>
							<span>Google Play</span>
						</Link>
					</div>
				</div>

				<Svg icon="app" viewBox="0 0 312 256" className="app__img">
					<path
						className="svg__blob"
						clipRule="evenodd"
						d="M145.125 18.6078C173.354 14.4016 203.149 28.173 222.745 42.8809C241.011 56.5901 234.19 78.9132 247.231 95.242C259.932 111.145 288.188 119.064 297.22 136.13C307.83 156.177 321.738 182.536 302.149 199.011C281.424 216.442 238.718 204.35 207.757 211.374C184.859 216.569 168.387 230.286 145.125 234.636C116.976 239.901 85.3942 248.272 59.396 239.121C33.4587 229.992 22.121 207.969 14.2075 188.556C7.22755 171.433 18.9753 153.892 17.413 136.13C15.7174 116.855 -10.3869 96.1299 4.64775 79.8762C19.9226 63.363 60.6879 73.9034 84.6339 63.4594C110.054 52.3727 115.767 22.982 145.125 18.6078Z"
					/>
				</Svg>
			</Contaienr>
		</Section>
	);
};

export default App;
