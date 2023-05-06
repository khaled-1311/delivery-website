import React, { useContext } from 'react';
import WebContext from '../../store/web-context';

import ColorItem from './ColorItem';
import '../../../sass/main.scss';

const ColorList = React.memo(() => {
	const ctx = useContext(WebContext);

	const colorList = ctx.colors.map((color, i) => (
		<div key={i}>
			<ColorItem id={i} data={color} />
		</div>
	));

	return <div className="box-palette__colors">{colorList}</div>;
});

export default ColorList;
