import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/App.jsx';
import NewTheme from './styles/theme';

import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar/navbar.jsx';
import SmoothScrolling from './components/Misc/lenis.jsx';

import './styles/homepage-project.css';
import './styles/fonts.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<SmoothScrolling>
			<BrowserRouter>
				<ChakraProvider theme={NewTheme}>
					<NavBar />
					<App />
				</ChakraProvider>
			</BrowserRouter>
		</SmoothScrolling>
	</React.StrictMode>
);
