import React from 'react';
import { NavLink } from 'react-router-dom';
//import Column from '../components/Column';
import Header from '../components/Header';

const Profil = () => {

	return (
		<div className='Profil'>
			<Header />
			{/* <Column/>  */}
			<NavLink to='/user/12'>User12</NavLink>
			<NavLink to='/user/18'>User18</NavLink>
		</div>
	);
};
export default Profil;