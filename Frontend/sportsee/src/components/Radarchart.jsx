import React from 'react';
import PropTypes from 'prop-types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * Radarchart component
 * @param { Array } data - data fetched with API or mocked data 
 */

const Radarchart = ({ data }) => {

	Radarchart.propTypes = {
		data: PropTypes.array
	};

	const formatAngleAxis = (kind) => {
		let kindToString;
		switch (kind) {
		case 1:
			kindToString = 'Cardio';
			break;
		case 2:
			kindToString = 'Energie';
			break;
		case 3:
			kindToString = 'Endurance';
			break;
		case 4:
			kindToString = 'Force';
			break;
		case 5:
			kindToString = 'Vitesse';
			break;
		case 6:
			kindToString = 'Intensité';
			break;
		default:
			kindToString = '';
			break;
		}
		return kindToString;
	};
	
	return (
		<div className='Radarchart'>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart cx="50%" cy="50%" outerRadius="65%" data={data}>
					<PolarGrid radialLines={false}/>
					<PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} tickFormatter={(kind) => formatAngleAxis(kind)} style={{fontSize: 10}}/>
					<Radar name="Mike" dataKey="value" stroke="#FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Radarchart;