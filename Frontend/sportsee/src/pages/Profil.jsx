import React from 'react';
import { NavLink } from 'react-router-dom';
// import Column from '../components/Column';
import Header from '../components/Header';

const Profil = () => {
	return (
		<div className='Profil'>
			<Header />
			{/* <Column/> */} 
			{/* NavLink to={{pathname: /User, search:id}} */}
			<NavLink to='/User12'>User12</NavLink> 
			<NavLink to='/User18'>User18</NavLink>
		</div>
	);
};
export default Profil;