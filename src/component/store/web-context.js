import React from 'react';

const WebContext = React.createContext({
	toggleMenuHandler: () => {},
	toggleSettingHandler: () => {},
	colorThemeHandler: () => {},
	changeColorHandler: () => {},
	isSettingOpend: false,
	isPalleteVisible: false,
	colorTheme: '',
	colors: [
		{ name: 'yellow', hue: 45, sat: 98 },
		{ name: 'red', hue: 4, sat: 90 },
		{ name: 'orange', hue: 18, sat: 85 },
		{ name: 'green', hue: 118, sat: 50 },
	],
});

export default WebContext;
