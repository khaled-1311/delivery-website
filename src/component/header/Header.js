import { useState } from 'react';
import Nav from './Nav';
import Link from '../re-usable/Link';
import ToggleMenu from './ToggleMenu';

const Header = props => {
	const [isHeaderACtive, setIsHeaderActive] = useState(false);

	const scrollHeader = () => {
		if (window.scrollY >= 80) setIsHeaderActive(true);
		else setIsHeaderActive(false);
	};

	window.addEventListener('scroll', scrollHeader);

	const classes = `header ${isHeaderACtive ? 'scroll-header' : ''}`;

	return (
		<header className={classes} id="header">
			<nav className="nav container">
				<a href="#" className="nav__logo">
					Delivery
				</a>

				<Nav />

				<ToggleMenu />

				<Link href="#" className="button__header">
					Order Now!
				</Link>
			</nav>
		</header>
	);
};

export default Header;
