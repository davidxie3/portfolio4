import { extendTheme, theme as base } from '@chakra-ui/react'

import styles from './styles'

const overrides = extendTheme({
    styles,

    colors:{
        mainPurple: {
            primary: '#d3a6ff',
            secondary: '#aa56FF',
        },
    },

    fonts:{
        heading: `'EpiceneDisplayRegularItalic', ${base.fonts?.heading}`,
    }
})

export default overrides