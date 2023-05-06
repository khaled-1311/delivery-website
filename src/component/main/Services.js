import React from 'react';
import Section from '../UI/Section';
import Contaienr from '../UI/Container';
import ServiceItem from './ServiceItem';
import serviceData from '../../data/services.json';

import '../../sass/main.scss';

const Services = () => {
	const serviceList = serviceData.map((item, i) => (
		<div className="services__data" key={i}>
			<ServiceItem content={item} />
		</div>
	));

	return (
		<Section className="services" id="services">
			<h2 className="section__title">
				Some Services We <br />
				Offer
			</h2>

			<Contaienr section="services">{serviceList}</Contaienr>
		</Section>
	);
};

export default Services;
