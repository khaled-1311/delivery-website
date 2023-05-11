import { useEffect, useState } from 'react';

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
		<li className="nav__item">
			<button
				type="button"
				className={btnClasses}
				onClick={toggleThemeHandler}
				aria-label="change apperance">
				<span className="theme__slider"></span>
			</button>
		</li>
	);
};

export default ToggleApperance;
