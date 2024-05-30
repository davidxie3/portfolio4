import { extendTheme, theme as base } from '@chakra-ui/react';

import styles from './styles';
import NavButton from './components/button-style';

const overrides = extendTheme({
	//My Main Theme Entry Point
	styles,

	colors: {
		mainPurple: {
			primary: '#BD82F8',
			secondaryBG: '#aa56FF',
		},
	},

	fonts: {
		EpiceneDisplayRegularItalic: `'EpiceneDisplayRegularItalic', ${base.fonts?.heading}, sans-serif`,
		RomieRegular: `'RomieRegular', ${base.fonts?.heading}, sans-serif`,
	},

	components: {
		Button: NavButton,
	},
});

export default overrides;
