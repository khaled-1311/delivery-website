import React, { useContext } from 'react';
import WebContext from '../../store/web-context';
import '../../../sass/main.scss';

const ColorItem = React.memo(props => {
	const ctx = useContext(WebContext);
	const color = props.data;

	const changeColorHandler = e => {
		const targetButton = e.target.closest('button');
		const siblings = Array.from(targetButton.parentNode.children);
		const filteredSiblings = siblings.filter(
			sibling => sibling !== targetButton
		);

		filteredSiblings.map(el => (el.style.backgroundColor = 'transparent'));

		targetButton.style.backgroundColor = `hsla(${color.hue}, ${color.sat}%, 60%, 0.4)`;

		ctx.changeColorHandler(color);
		localStorage.setItem('color-theme', color.name);
	};

	return (
		<button
			type="button"
			key={props.id}
			className={ctx.isSettingOpend ? 'show-color' : 'hide-color'}
			onClick={changeColorHandler}
			data-color={color.name}
			style={{
				backgroundColor:
					ctx.colorTheme === color.name
						? `hsla(${color.hue}, ${color.sat}%, 60%, 0.4)`
						: '',
			}}>
			<span
				style={{
					backgroundColor: `hsl(${color.hue}, ${color.sat}%, 60%)`,
				}}></span>
		</button>
	);
});

export default ColorItem;
