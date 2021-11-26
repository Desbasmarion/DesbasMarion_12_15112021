import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Linechart = ({ data }) => {
	
	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			return (
				<div className="custom-tooltip">
					<p className="min">{`${payload[0].value} min`}</p>
				</div>
			);
		}
	
		return null;
	};

	Linechart.propTypes = {
		data: PropTypes.array
	};
	CustomTooltip.propTypes = {
		active: PropTypes.bool,
		payload: PropTypes.array
	};

	return (
		<div className='Linechart'>
			<h2>Durée moyenne des sessions</h2>
			<ResponsiveContainer width="100%" height="100%" >
				<LineChart width="100%" height="100%" data={data} margin={0}>
					<Line type="monotone" dataKey="sessionLength" stroke="white" opacity="0.5" strokeWidth="2" dot={false} height="100%"/>
					<CartesianGrid vertical={false} horizontal={false} />
					<XAxis dataKey="day" tickLine={false} axisLine={false} tick={false} />
					<YAxis hide={true} />
					<Tooltip cursor={{ stroke: 'black', strokeOpacity: 0.1, strokeWidth: 60}} content={<CustomTooltip />}/>
				</LineChart>
			</ResponsiveContainer>
			<div className="formatXAxis">
				<span>L</span>
				<span>M</span>
				<span>M</span>
				<span>J</span>
				<span>V</span>
				<span>S</span>
				<span>D</span>
			</div>
		</div>
	);
};

export default Linechart;