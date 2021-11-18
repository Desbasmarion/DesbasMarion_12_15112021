import React from 'react';
import Column from '../components/Column';
import Header from '../components/Header';
import Inconstruction from '../components/Inconstruction';

const Home = () => {
	return (
		<div className='Home'>
			<Header />
			<Column />
			<Inconstruction />
		</div>
	);
};

export default Home;