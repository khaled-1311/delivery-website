import { Fragment } from 'react';
import Svg from '../UI/Svg';
import Link from '../re-usable/Link';
import '../../sass/main.scss';

const ServiceItem = props => {
	const data = props.content;
	return (
		<Fragment>
			<h3 className="services__subtitle">{data.service__title}</h3>

			<Svg
				icon={data.service__icon}
				viewBox="0 0 135 94"
				className="services__img"
				isService={true}>
				<path
					className="svg__blob"
					clipRule="evenodd"
					d={data.service__icon_d}
				/>
			</Svg>
			<p className="services__description">{data.service__content}</p>
			<div>
				<Link href="#" className="button__link">
					Learn More
				</Link>
			</div>
		</Fragment>
	);
};

export default ServiceItem;
