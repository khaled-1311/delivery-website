import React, { useEffect, useRef } from 'react';
import '../../sass/main.scss';

const Section = props => {
	const section = useRef();

	const callBack = entries => {
		const entry = entries[0];

		if (!entry.isIntersecting) return;

		section.current.classList.add('active-section');
	};

	const observer = new IntersectionObserver(callBack, {
		threshold: window.innerHeight > 467 ? 0.5 : 0.3,
	});

	const scrollActive = () => {
		if (!props.id) return;
		const scrollY = window.pageYOffset;

		const sectionHeight = section.current.offsetHeight;
		const sectionTop = section.current.offsetTop - 50;
		const sectionId = section.current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav__menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', scrollActive);

		observer.observe(section.current);
	}, []);

	const classes = `${props.className} section container`;
	return (
		<section className={classes} id={props.id ? props.id : ''} ref={section}>
			{props.children}
		</section>
	);
};

export default Section;
