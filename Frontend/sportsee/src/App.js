import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Community from './pages/Community';
import Error from './pages/Error';
import Settings from './pages/Settings';
import User from './pages/User';

/**
 * Router application
 * @returns all routes for the application 
 */

const App = () => {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='community' element={ <Community /> } />
				<Route path='profil' element={ <Profil /> } />
				<Route path='/user/:id' element={ <User /> } />
				<Route path='settings' element={ <Settings /> } />
				<Route path='*' element={ <Error /> } />
			</Routes>
		</BrowserRouter>
	);
};

export default App;