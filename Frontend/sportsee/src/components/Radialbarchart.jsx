import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * Radialbarchart component
 * @param { Number } data - data fetched with API or mocked data 
 */

const Radialbarchart = ({ data }) => {

	Radialbarchart.propTypes = {
		data: PropTypes.number
	};
	
	const percentage = data * 100;
	
	return (
		<div className="Radialbarchart">
			<span>Score</span>
			<div className='percentageContainer'>
				<span className='percentage'>{percentage}%</span>
				<span className='legend'>de votre objectif</span>
			</div>
			<ResponsiveContainer width="80%" height="80%">
				<CircularProgressbar
					value={percentage}
					styles={buildStyles({
						textColor: 'black',
						pathColor: '#FF0000',
						trailColor: 'white',
						strokeLinecap: 'round',
						textSize: '10px',
					})}
					strokeWidth={5}
				/>
			</ResponsiveContainer>
		</div>
	);
};

export default Radialbarchart;

