import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div className='Navigation'>
			<NavLink to='/' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
                Accueil
			</NavLink>
			<NavLink to='/profil' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
                Profil
			</NavLink>
			<NavLink to='/settings' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
                Réglage
			</NavLink>
			<NavLink to='/community' className={({ isActive }) => 'nav-link' + (isActive ? ' activated' : '')}>
                Communauté
			</NavLink>
		</div>
	);
};
export default Navigation;
