import React from 'react';
import NavLink from './NavLink';
import '../../sass/main.scss';

import ToggleApperance from './ToggleApperance';

const Nav = props => {
	return (
		<div className="nav__menu" id="nav-menu">
			<ul className="nav__list">
				<li className="nav__item">
					<NavLink link="home" content="Home" />
				</li>
				<li className="nav__item">
					<NavLink link="about" content="About us" />
				</li>
				<li className="nav__item">
					<NavLink link="services" content="Services" />
				</li>
				<li className="nav__item">
					<NavLink link="contact" content="Contact us" />
				</li>

				<ToggleApperance />
			</ul>
		</div>
	);
};

export default Nav;
