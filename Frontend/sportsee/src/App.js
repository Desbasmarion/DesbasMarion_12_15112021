import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';
import Community from './pages/Community';
import Error from './pages/Error';
import Settings from './pages/Settings';
import User12 from './pages/User12';
import User18 from './pages/User18';


const App = () => {
	return (
		<BrowserRouter >
			<Routes>
				<Route path='/' element={ <Home /> } />
				<Route path='community' element={ <Community /> } />
				<Route path='profil' element={ <Profil /> } />
				<Route path='User12' element={ <User12 />} />
				<Route path='User18' element={ <User18 />} />
				<Route path='settings' element={ <Settings /> } />
				<Route path='*' element={ <Error /> } />
			</Routes>
		</BrowserRouter>
	);
};

export default App;