import { useContext } from 'react';
import WebContext from '../store/web-context';

import icons from '../../img/icons.svg';

const ToggleMenu = props => {
	const ctx = useContext(WebContext);

	return (
		<div
			className="nav__toggle"
			id="nav-toggle"
			onClick={ctx.toggleMenuHandler}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="21.5"
				height="21.5">
				<use href={`${icons}#grid`}></use>
			</svg>
		</div>
	);
};

export default ToggleMenu;
