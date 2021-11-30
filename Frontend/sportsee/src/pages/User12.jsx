import React, { Fragment } from 'react';
import Header from '../components/Header';
import { useEffect, useState } from 'react';
import Barchart from '../components/Barchart';
import LineChart  from '../components/Linechart';
import Radarchart from '../components/Radarchart';
import Radialbarchart from '../components/Radialbarchart';

const User12 = () => {
	const [mainData, setMainData ] =  useState([]);
	const [activity, setActivity] = useState([]);
	const [average, setAverage] = useState([]);
	const [performance, setPerformance] = useState([]);

	const fetchMain = async() => {
		const res = await fetch('../User12/mainData.json');
		const answer = await res.json();
		setMainData(answer.data);
	};

	useEffect(() => {
		fetchMain();
		fetchActivity();
		fetchAverage();
		fetchPerformance();
	}, []);

	const fetchActivity = async() => {
		const res = await fetch('../User12/activityData.json');
		const answer = await res.json();
		setActivity(answer.data);
	};

	const fetchAverage = async() => {
		const res = await fetch('../User12/averageSessionData.json');
		const answer = await res.json();
		setAverage(answer.data);
	};

	const fetchPerformance = async() => {
		const res = await fetch('../User12/performanceData.json');
		const answer = await res.json();
		setPerformance(answer.data);
	};
	
	
	return (
		<div className='User12'>
			<Header />
			{mainData?.userInfos?.firstName ? 
				<Fragment>
					<p>Bonjour {mainData.userInfos.firstName}</p> 
					<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
				</Fragment>
				: 'chargement'}
			<Barchart data={activity.sessions} />
			<LineChart data={average.sessions} />
			<Radarchart data={performance.data} />
			<Radialbarchart data={mainData.todayScore}/>
		</div>
	);
};

export default User12;