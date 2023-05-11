import icons from '../../img/icons.svg';

const Footer = props => {
	return (
		<footer className="footer section">
			<div className="footer__container container grid">
				<div className="footer__content">
					<a href="#" className="footer__logo">
						Delivery
					</a>
					<p className="footer__description">
						Order Products Faster <br />
						Easier
					</p>
				</div>

				<div className="footer__content">
					<h3 className="footer__title">Our Services</h3>

					<ul className="footer__links">
						<li>
							<a href="#" className="footer__link">
								Pricing{' '}
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Discounts
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Report a bug{' '}
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Terms of Service
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__content">
					<h3 className="footer__title">Our Company</h3>

					<ul className="footer__links">
						<li>
							<a href="#" className="footer__link">
								Blog
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Our mision
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Get in touch
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__content">
					<h3 className="footer__title">Community</h3>

					<ul className="footer__links">
						<li>
							<a href="#" className="footer__link">
								Support
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Questions
							</a>
						</li>
						<li>
							<a href="#" className="footer__link">
								Customer help
							</a>
						</li>
					</ul>
				</div>

				<div className="footer__social">
					<a
						href="https://www.facebook.com/"
						target="_blank"
						rel="noopener"
						className="footer__social-link"
						aria-label="link to facebook">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<use href={`${icons}#facebook`}></use>
						</svg>
					</a>
					<a
						href="https://twitter.com/"
						target="_blank"
						rel="noopener"
						className="footer__social-link"
						aria-label="link to twitter">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<use href={`${icons}#twitter`}></use>
						</svg>
					</a>
					<a
						href="https://www.instagram.com/"
						target="_blank"
						rel="noopener"
						className="footer__social-link"
						aria-label="link to instagram">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24">
							<use href={`${icons}#instagram`}></use>
						</svg>
					</a>
				</div>

				<p className="footer__copy">&#169; All right reserved</p>
			</div>
		</footer>
	);
};

export default Footer;
