import React from 'react';

import Section from '../UI/Section';
import Contaienr from '../UI/Container';
import Svg from '../UI/Svg';

import '../../sass/main.scss';

const Security = () => {
	return (
		<Section className="security">
			<Contaienr section="security">
				<div className="security__data">
					<h2 className="section__title-center">
						Your Safety Is <br />
						Important
					</h2>
					<p className="security__description">
						When your order reaches you, we have the health safety protocols, so
						that you are protected from any disease. Watch the video of how the
						delivery is made.
					</p>
				</div>

				<Svg icon="security" viewBox="0 0 312 221">
					<path
						className="svg__blob"
						clipRule="evenodd"
						d="M146.137 4.22643C177.748 -2.97581 206.274 23.1576 229.992 40.5258C251.017 55.9222 262.978 75.8309 272.499 96.7598C282.192 118.066 300.281 142.538 285.25 161.993C269.962 181.783 230.296 177.103 202.881 186.874C182.644 194.086 167.895 207.639 146.137 211.573C119.351 216.416 86.2133 225.465 65.5354 211.707C44.5361 197.736 61.8497 170.746 54.1954 150.402C47.0089 131.301 13.4763 116.078 22.5437 97.4402C31.6999 78.6197 73.623 86.0355 92.3992 71.8745C117.647 52.8331 111.996 12.005 146.137 4.22643Z"
					/>
				</Svg>
			</Contaienr>
		</Section>
	);
};

export default Security;
