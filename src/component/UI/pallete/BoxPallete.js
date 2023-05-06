import React, { useContext } from 'react';
import WebContext from '../../store/web-context';
import '../../../sass/main.scss';
import ColorList from './ColorList';
import Gear from './Gear';

const BoxPallete = () => {
	const ctx = useContext(WebContext);

	const classes = `box-palette ${ctx.isPalleteVisible ? 'show-pallete' : ''}`;

	return (
		<div className={classes}>
			<ColorList />
			<Gear />
		</div>
	);
};

export default BoxPallete;
