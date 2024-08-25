import Home from './Home';
import About from './About';
import Archive from './Archives';
import Works from './Works';

import PhotographyPage from './StationPages/Photography';
import DesignPage from './StationPages/Design';
import HoangLe from './ProjectPages/HoangLe';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			{/* Main Pages */}
			<Route path="/portfolio4" element={<Home />} />
			<Route path="/portfolio4/about" element={<About />} />
			<Route path="/portfolio4/archive" element={<Archive />} />
			<Route path="/portfolio4/works" element={<Works />} />

			{/* Station Pages */}
			<Route path="/portfolio4/photography" element={<PhotographyPage />} />
			<Route path="/portfolio4/design" element={<DesignPage />}/>

			{/* Project Pages */}
			<Route path="/portfolio4/works/HoangLe" element={<HoangLe />} />
		</Routes>
	);
}

export default App;
