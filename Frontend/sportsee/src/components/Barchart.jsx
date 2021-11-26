import React from 'react';
import PropTypes from 'prop-types';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function Barchart({ data }) {

	const formatXAxis = (tickItem) => {
		return tickItem + 1;
	};

	const CustomTooltip = ({ active, payload }) => {
		if (active && payload && payload.length) {
			
			return (
				<div className="custom-tooltip">
					<p className="kg">{`${payload[0].value}kg`}</p>
					<p className="kcal">{`${payload[1].value}Kcal`}</p>
					
				</div>
			);
		}
	
		return null;
	};

	//PropTypes
	Barchart.propTypes = {
		data: PropTypes.array
	};

	CustomTooltip.propTypes = {
		active: PropTypes.bool,
		payload: PropTypes.array
	};
	
	
	return (
		<div className='Barchart'>
			<div className='legendContainer'>
				<span>Activité quotidienne</span>
				<div className='legend'>
					<div className='weight'>
						<i className="fas fa-circle"></i>
						<span>Poids (kg)</span>
					</div>
					<div className='calories'>
						<i className="fas fa-circle"></i>
						<span>Calories brûlées (kCal)</span>
					</div>
				</div>
				
			</div>
			<ResponsiveContainer width="95%" height={300}>
				<BarChart
					width={500}
					height={300}
					data={data}
					margin={{
						top: 5,
						right: 30,
						left: 20,
						bottom: 5
					}}
			
				>
					<CartesianGrid strokeDasharray="3 5" vertical={false} />
					<XAxis tickFormatter={formatXAxis}  tickLine={false} tickSize="10" />
					<YAxis orientation='right' axisLine={false} tickLine={false} tickSize="30"  />
					<Tooltip width={50} content={<CustomTooltip />} />
					<Bar dataKey="kilogram" fill="#282D30" radius={[30, 30, 0, 0]} maxBarSize={12} />
					<Bar dataKey="calories" fill="#E60000" radius={[30, 30, 0, 0]} maxBarSize={12}/>
				</BarChart>
			</ResponsiveContainer>
		</div>
		
	);
}
  