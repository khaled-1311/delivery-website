import React, { useContext } from 'react';
import WebContext from '../../store/web-context';

import ColorItem from './ColorItem';

const ColorList = React.memo(() => {
	const ctx = useContext(WebContext);

	console.log(ctx.isSettingOpend);

	const colorList = ctx.colors.map((color, i) => (
		<div key={i}>
			<ColorItem id={i} data={color} />
		</div>
	));

	return (
		<div
			className={`box-palette__colors${
				ctx.isSettingOpend ? ' show-color' : ''
			}`}>
			{colorList}
		</div>
	);
});

export default ColorList;
