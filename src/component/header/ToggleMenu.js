import React, { useContext } from 'react';
import WebContext from '../store/web-context';
import '../../sass/main.scss';

const ToggleMenu = props => {
	const ctx = useContext(WebContext);

	return (
		<div
			className="nav__toggle"
			id="nav-toggle"
			onClick={ctx.toggleMenuHandler}>
			<i className="bx bx-grid-alt"></i>
		</div>
	);
};

export default ToggleMenu;
