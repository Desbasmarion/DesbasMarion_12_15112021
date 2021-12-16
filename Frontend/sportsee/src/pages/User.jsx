import React, { Fragment } from 'react';
import Header from '../components/Header';
import Barchart from '../components/Barchart';
import LineChart  from '../components/Linechart';
import Radarchart from '../components/Radarchart';
import Radialbarchart from '../components/Radialbarchart';
import Cardinfos from '../components/Cardinfos';
import Column from '../components/Column';
import { useParams } from 'react-router-dom';
import fetchData  from '../services/fetchData';

const User = () => {

	const urlParams = useParams();
	const idParam = urlParams.id;
	console.log(idParam);
	

	//Recovery users data
	
	const mainData = fetchData('../' + idParam + '/mainData.json');
	console.log(mainData);

	fetchData('../' + idParam + '/averageSessionData.json');
	fetchData('../' + idParam + '/activityData.json');
	fetchData('../' + idParam + '/performanceData.json');

	const activity = 'test';
	const average = 'test';

	return (
		<div className='User12'>
			<Header />
			<Column />
			{mainData?.userInfos?.firstName ? 
				<Fragment>
					<p>Bonjour {mainData?.userInfos?.firstName}</p> 
					<p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
				</Fragment>
				: 'chargement'}
			<section className='chartsContainer'>
				<Barchart data={activity?.sessions} />
				<LineChart data={average?.sessions} />
				<Radarchart data={performance?.data} />
				<Radialbarchart data={mainData?.todayScore}/>
				<Cardinfos icon='fas fa-fire-alt' score={mainData?.keyData?.calorieCount} unity='kCal' types='Calories'/>
				<Cardinfos icon='fas fa-drumstick-bite' score={mainData?.keyData?.proteinCount} unity='g' types='Protéines'/>
				<Cardinfos icon='fas fa-apple-alt' score={mainData?.keyData?.carbohydrateCount} unity='g' types='Glucides'/>
				<Cardinfos icon='fas fa-hamburger' score={mainData?.keyData?.lipidCount} unity='g' types='Lipides'/>
			</section>
		</div>
	);
};

export default User;
