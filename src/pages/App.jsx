import Home from './Home';
import About from './About';
import Archive from './Archives';
import Works from './Works'

import Melcourses from './ProjectPages/Melcourses';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>

			{/* Main Pages */}
			<Route path="/portfolio4" element={<Home />} />
			<Route path="/portfolio4/about" element={<About />} />
			<Route path="/portfolio4/archive" element={<Archive />} />
			<Route path="/portfolio4/works" element={<Works />} />

			{/* Project Pages */}
			<Route path="/portfolio4/works/Melcourses" element={<Melcourses />}/>
		</Routes>
	);
}

export default App;
