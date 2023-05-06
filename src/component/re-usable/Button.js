import React from 'react';

const Button = props => {
	const classes = `button ${props.className}`;
	return (
		<button className={classes} type={props.type ? props.type : 'button'}>
			{props.children}
		</button>
	);
};

export default Button;
