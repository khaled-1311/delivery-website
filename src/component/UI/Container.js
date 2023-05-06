import React from 'react';
import '../../sass/main.scss';

const Contaienr = React.forwardRef((props, ref) => {
	const classes = `${props.section}__container grid`;
	return (
		<div className={classes} ref={ref}>
			{props.children}
		</div>
	);
});
export default Contaienr;
