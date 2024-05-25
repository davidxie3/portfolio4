import { extendTheme, theme as base } from '@chakra-ui/react'

import styles from './styles'
import NavButton from './components/button-style'

const overrides = extendTheme({ //My Main Theme Entry Point
    styles,

    colors:{
        mainPurple: {
            primary: '#d3a6ff',
            secondary: '#aa56FF',
        },
    },

    fonts:{
        EpiceneDisplayRegularItalic: `'EpiceneDisplayRegularItalic', ${base.fonts?.heading}`,
        EpiceneDisplayRegular: `'EpiceneDisplayRegular', ${base.fonts?.heading}`,
        EpiceneDisplayLight: `'EpiceneDisplayLight', ${base.fonts?.heading}`,
        EpiceneDisplayLightItalic: `'EpiceneDisplayLightItalic', ${base.fonts?.heading}`,

        RomieMedium: `'RomieMedium', ${base.fonts?.heading}`,
    },

    components: {
        Button: NavButton,
    },
})

export default overrides