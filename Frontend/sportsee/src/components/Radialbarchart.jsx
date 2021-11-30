import React from 'react';
import { RadialBarChart, RadialBar, Legend } from 'recharts';
import PropTypes from 'prop-types';

const Radialbarchart = ({ data }) => {

	//PropTypes
	Radialbarchart.propTypes = {
		data: PropTypes.number
	};

	return (
		<div>
			<RadialBarChart
				width={500}
				height={300}
				cx={150}
				cy={150}
				innerRadius={20}
				outerRadius={140}
				barSize={10}
				data={data}
			>
				<RadialBar
					minAngle={15}
					label={{ position: 'insideStart', fill: 'red' }}
					background
					clockWise
					dataKey={data}
				/>
				<Legend
					iconSize={10}
					width={120}
					height={140}
					layout="vertical"
					verticalAlign="middle"
				/>
			</RadialBarChart>
		</div>
	);
};

export default Radialbarchart;

