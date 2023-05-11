import { useContext } from 'react';
import WebContext from '../../store/web-context';
import icons from '../../../img/icons.svg';

const Gear = () => {
	const ctx = useContext(WebContext);

	return (
		<div className="box-palette__gear" onClick={ctx.toggleSettingHandler}>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 24 24"
				width="24"
				height="24">
				<use href={`${icons}#gear`}></use>
			</svg>
		</div>
	);
};

export default Gear;
