import React, { useContext } from 'react';
import WebContext from '../store/web-context';
import '../../sass/main.scss';

const ScrollTop = props => {
	const ctx = useContext(WebContext);

	const classes = `scrollup ${ctx.isPalleteVisible ? 'show-scroll' : ''}`;

	return (
		<a href="#" className={classes} id="scroll-up">
			<i className="bx bx-up-arrow-alt scrollup__icon"></i>
		</a>
	);
};

export default ScrollTop;
