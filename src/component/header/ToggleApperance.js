import React, { useEffect, useState } from 'react';
import '../../sass/main.scss';

const ToggleApperance = props => {
	const [isDark, setIsDark] = useState(false);

	const toggleThemeHandler = () => {
		setIsDark(prevState => !prevState);
		localStorage.setItem('isDark', !isDark ? true : false);
	};

	useEffect(() => {
		if (
			!localStorage.getItem('isDark') ||
			localStorage.getItem('isDark') === 'false'
		)
			setIsDark(false);
		else setIsDark(true);
	}, []);

	document.body.classList[isDark ? 'add' : 'remove']('dark-theme');

	const btnClasses = `theme theme__button ${isDark ? 'toggle-theme' : ''}`;

	return (
		<button type="button" className={btnClasses} onClick={toggleThemeHandler}>
			<span className="theme__slider"></span>
		</button>
	);
};

export default ToggleApperance;
