import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage'
import VotePage from './pages/VotePage'
import { Route, Routes } from 'react-router';

function App() {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/voting/:id' element={<VotePage />} />
			<Route path='/admin' element={<AdminPage />} />
		</Routes>

	);
}

export default App;
