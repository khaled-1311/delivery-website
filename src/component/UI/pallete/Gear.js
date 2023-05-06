import React, { useContext } from 'react';
import WebContext from '../../store/web-context';
import '../../../sass/main.scss';

const Gear = () => {
	const ctx = useContext(WebContext);

	return (
		<div className="box-palette__gear" onClick={ctx.toggleSettingHandler}>
			<i className="bx bx-cog"></i>
		</div>
	);
};

export default Gear;
