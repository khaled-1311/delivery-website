import svg from '../../img/svg.svg';

const Svg = props => {
	const href = `${svg}#${props.icon}`;
	const classes = `${props.isService ? '' : 'svg__img'} svg__color ${
		props.className ? props.className : ''
	}`;
	return (
		<svg
			className={classes}
			viewBox={props.viewBox}
			xmlns="http://www.w3.org/2000/svg">
			{props.children ? props.children : ''}
			<use href={href}></use>
		</svg>
	);
};

export default Svg;
