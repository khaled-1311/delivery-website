import React, { useState, useEffect } from 'react';
import WebContext from './web-context';

const changeTheme = colorObj => {
	const root = document.querySelector(':root');

	root.style.setProperty('--hue', colorObj.hue);
	root.style.setProperty('--sat', `${colorObj.sat}%`);

	if (colorObj.name === 'yellow')
		root.style.setProperty('--button-color', '#1a1a1a');
	else root.style.setProperty('--button-color', '#fff');
};

const WebProvider = props => {
	const [palleteIsActive, setPalletIsActive] = useState(false);
	const [palleteIsVisible, setPalleteIsVisible] = useState(false);
	const [colorTheme, setColorTheme] = useState('');
	const colors = [
		{ name: 'yellow', hue: 45, sat: 98 },
		{ name: 'red', hue: 4, sat: 90 },
		{ name: 'orange', hue: 18, sat: 85 },
		{ name: 'green', hue: 118, sat: 50 },
	];

	useEffect(() => {
		const palleteDisplay = () => {
			if (window.scrollY >= 560) setPalleteIsVisible(true);
			else {
				setPalleteIsVisible(false);
				setPalletIsActive(false);
			}
		};

		window.addEventListener('scroll', palleteDisplay);
	}, []);

	const toggleMenuHandler = () => {
		const nav = document.getElementById('nav-menu');
		nav.classList.toggle('show-menu');
	};

	const toggleSettingHandler = () => {
		setPalletIsActive(prevState => !prevState);
	};

	const colorThemeHandler = colorName => {
		setColorTheme(colorName);
	};

	const changeColorHandler = colorObj => {
		changeTheme(colorObj);
		setColorTheme(colorObj.name);
		return colorObj;
	};

	window.addEventListener('load', () => {
		if (!localStorage.getItem('color-theme')) {
			setColorTheme('yellow');
			changeColorHandler({ name: 'yellow', hue: 45, sat: 98 });
			return;
		}

		const [colorObj] = colors.filter(
			color => color.name === localStorage.getItem('color-theme')
		);

		setColorTheme(colorObj.name);

		changeColorHandler(colorObj);
	});

	const webContext = {
		toggleMenuHandler,
		toggleSettingHandler,
		colorThemeHandler,
		changeColorHandler,
		isSettingOpend: palleteIsActive,
		isPalleteVisible: palleteIsVisible,
		colorTheme,
		colors,
	};

	return (
		<WebContext.Provider value={webContext}>
			{props.children}
		</WebContext.Provider>
	);
};

export default WebProvider;
