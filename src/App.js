import HomePage from './pages/HomePage';
import AdminPage from './pages/AdminPage'
import { Route, Routes } from 'react-router';

function App() {
	return (
		<Routes>
			<Route path='' element={<HomePage />} />
			<Route path='admin' element={<AdminPage />} />
		</Routes>

	);
}

export default App;
