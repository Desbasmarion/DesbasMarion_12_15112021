import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

const Linechart = ({ data }) => {

	Linechart.propTypes = {
		data: PropTypes.array
	};

	
	const formatXAxis = () =>{
		return('L');
	};
	
	return (
		<div className='Linechart'>
			<ResponsiveContainer width="100%" height="100%">
				<LineChart width="100%" height="100%" data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
					<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" dot={false}/>
					<CartesianGrid stroke="#ccc" strokeDasharray="5 5" vertical={false} horizontal={false} />
					<XAxis dataKey="day" tickLine={false} axisLine={false} tickFormatter={formatXAxis} />
					<YAxis hide={true} />
					<Tooltip cursor={{ stroke: 'black', strokeOpacity: 0.1, strokeWidth: 50 }}/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Linechart;