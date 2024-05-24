import { extendTheme } from '@chakra-ui/react'

import styles from './styles'

const overrides = {
    styles,
    
    colors:{
        mainPurple: {
            primary: '#d3a6ff',
            secondary: '#aa56FF',
        },
    }
}

export default extendTheme(overrides)