import React from 'react';
import PropTypes from 'prop-types';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend
} from 'recharts';

// const data = [
// 	{
// 		name: 1,
// 		Kcal: 4000,
// 		kg: 2400,
		
// 	},
// 	{
// 		name: 2,
// 		Kcal: 3000,
// 		kg: 1398,
		
// 	},
// 	{
// 		name: 3,
// 		Kcal: 2000,
// 		kg: 9800,
		
// 	},
// 	{
// 		name: 4,
// 		Kcal: 2780,
// 		kg: 3908,
		
// 	},
// 	{
// 		name: 5,
// 		Kcal: 1890,
// 		kg: 4800,
		
// 	},
// 	{
// 		name: 6,
// 		Kcal: 2390,
// 		kg: 3800,
		
// 	},
// 	{
// 		name: 7,
// 		Kcal: 3490,
// 		kg: 4300,
		
// 	},
// 	{
// 		name: 8,
// 		Kcal: 3490,
// 		kg: 4300,
		
// 	},
// 	{
// 		name: 9,
// 		Kcal: 3490,
// 		kg: 4300,
		
// 	},
// 	{
// 		name: 10,
// 		Kcal: 3490,
// 		kg: 4300,
		
// 	}
// ];

export default function Barchart({ data }) {

	Barchart.propTypes = {
		data: PropTypes.array
	};

	const formatXAxis = (tickItem) => {
		return tickItem + 1;
	};

	return (
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
			<CartesianGrid strokeDasharray="3 3"  />
			<XAxis tickFormatter={formatXAxis} axisLine={false} tickLine={false} tickSize="10"/>
			<YAxis orientation='right' axisLine={false} tickLine={false} tickSize="30"/>
			<Tooltip />
			<Legend />
			<Bar dataKey="kilogram" fill="#282D30" radius={[30, 30, 0, 0]} maxBarSize={12} />
			<Bar dataKey="calories" fill="#E60000" radius={[30, 30, 0, 0]} maxBarSize={12}/>
		</BarChart>
	);
}
  