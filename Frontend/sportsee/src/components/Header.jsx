import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';

/**
 * 
 * @returns Header component
 */
const Header = () => {
	return (
		<div className='Header'>
			<Logo />
			<Navigation />
		</div>
	);
};
export default Header;