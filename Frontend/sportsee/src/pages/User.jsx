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

	//Recovery users mocked data
	const mainData = fetchData('../' + idParam + '/mainData.json');
	const average = fetchData('../' + idParam + '/averageSessionData.json');
	const activity = fetchData('../' + idParam + '/activityData.json');
	const performance = fetchData('../' + idParam + '/performanceData.json');

	//Recovery API data
	// const mainData = fetchData('http://localhost:3000/user/' + idParam);
	// const average = fetchData('http://localhost:3000/user/' + idParam + '/average-sessions');
	// const activity = fetchData('http://localhost:3000/user/' + idParam + '/activity');
	// const performance = fetchData('http://localhost:3000/user/' + idParam + '/performance');

	return (
		<div className='User'>
			<Header />
			<Column />
			{mainData?.data?.userInfos?.firstName ? 
				<Fragment>
					<p className='name'>Bonjour <span>{mainData?.data?.userInfos?.firstName}</span></p> 
					<p className='congrats'>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
				</Fragment>
				: 'chargement'}
			<section className='chartsContainer'>
				<Barchart data={activity?.data?.sessions} />
				<section className='bottomContainer'>
					<LineChart data={average?.data?.sessions} />
					<Radarchart data={performance?.data?.data} />
					<Radialbarchart data={mainData?.data?.todayScore}/>
				</section>
				
				<section className='cardsContainer'>
					<Cardinfos icon='fas fa-fire-alt' score={mainData?.data?.keyData?.calorieCount} unity='kCal' types='Calories'/>
					<Cardinfos icon='fas fa-drumstick-bite' score={mainData?.data?.keyData?.proteinCount} unity='g' types='Protéines'/>
					<Cardinfos icon='fas fa-apple-alt' score={mainData?.data?.keyData?.carbohydrateCount} unity='g' types='Glucides'/>
					<Cardinfos icon='fas fa-hamburger' score={mainData?.data?.keyData?.lipidCount} unity='g' types='Lipides'/>
				</section>
			</section>
		</div>
	);
};

export default User;
