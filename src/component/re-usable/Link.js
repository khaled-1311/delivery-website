import React from 'react';

const Link = props => {
	const classes = `button ${props.className ? props.className : ''}`;
	return (
		<a href={props.href} className={classes}>
			{props.children}
		</a>
	);
};

export default Link;
