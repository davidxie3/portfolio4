import Home from './Home';
import About from './About';
import Archive from './Archives';
import Works from './Works'
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Routes>
			<Route path="/portfolio4" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/archive" element={<Archive />} />
			<Route path="/works" element={<Works />} />
		</Routes>
	);
}

export default App;
