import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const Radarchart = ({ data }) => {
//PropTypes
	Radarchart.propTypes = {
		data: PropTypes.array
	};


	return (
		<div className='Radarchart'>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey="subject" />
					<PolarRadiusAxis />
					<Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Radarchart;