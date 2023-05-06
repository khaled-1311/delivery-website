import React from 'react';
import '../../sass/main.scss';

const NavLink = props => {
	const linkClickHandler = () => {
		const nav = document.getElementById('nav-menu');
		nav.classList.remove('show-menu');
	};

	return (
		<a href={`#${props.link}`} className="nav__link" onClick={linkClickHandler}>
			{props.content}
		</a>
	);
};

export default NavLink;
