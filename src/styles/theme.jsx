import { extendTheme, theme as base } from '@chakra-ui/react';

import styles from './styles';
import NavButton from './components/button-style';
import NavBar from './components/navbar-style';
import homepageProject from '../components/Homepage/homepage-project';

const overrides = extendTheme({
	//My Main Theme Entry Point
	styles,
	colors: {
		mainPurple: {
			primary: '#BD82F8',
			secondaryBG: '#9747FF',
		},
	},
	fonts: {
		EpiceneDisplayRegularItalic: `'EpiceneDisplayRegularItalic', ${base.fonts?.heading}, sans-serif`,
		RomieRegular: `'RomieRegular', ${base.fonts?.heading}, sans-serif`,
	},

	components: {
		Button: NavButton,
        NavBar: NavBar,
		homepageProject : homepageProject,
	},
});

export default overrides;
