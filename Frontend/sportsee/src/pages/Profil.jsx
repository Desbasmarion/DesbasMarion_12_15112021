import React from 'react';
import { NavLink } from 'react-router-dom';
import Column from '../components/Column';
import Header from '../components/Header';

/**
 * 
 * @returns Profil page component using Navlink for redirection user12 or user 18
 */

const Profil = () => {

	return (
		<div className='Profil'>
			<Header />
			<Column/> 
			<p>
				Veuillez séléctionner un utilisateur pour observer ses performances
			</p>
			<section className='linksContainer'>
				<NavLink className='user' to='/user/12'>User12</NavLink>
				<NavLink className='user' to='/user/18'>User18</NavLink>
			</section>
			
		</div>
	);
};
export default Profil;