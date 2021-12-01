import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import PropTypes from 'prop-types';

const Radialbarchart = ({ data }) => {

	//PropTypes;
	Radialbarchart.propTypes = {
		data: PropTypes.number
	};
	
	const percentage = data * 100;
	
	return (
		<div className="Radialbarchart">
			<CircularProgressbar
				value={percentage}
				text={`${percentage}% de votre objectif`}
				styles={buildStyles({
					textColor: 'black',
					pathColor: '#FF0000',
					trailColor: 'white',
					strokeLinecap: 'round',
					textSize: '14px'
				})}
				strokeWidth={5}
				
			/>
		</div>
	);
};

export default Radialbarchart;

