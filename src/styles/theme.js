// theme.js
import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools';


const breakpoints = createBreakpoints ( {
  xxs: '380px',
  xs: '576px',
  sm: '680px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
})

const theme = extendTheme({
  breakpoints,
  styles: {
    global: {
      body: {
        position: "relative",
          margin: 0,
          padding: 0,
          background: "#0d0d0d",
          color:"#f2f2f2",
          minHeight:"100vh", 
  
      },
    },
  },
})

export default theme