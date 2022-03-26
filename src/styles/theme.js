// theme.js
import { extendTheme } from '@chakra-ui/react'

// Version 1: Using objects
const theme = extendTheme({
  styles: {
    global: {
      body: {
          margin: 0,
          padding: 0,
          background: "#0d0d0d",
          color:"white",
          minHeight:"100vh"
    },
    colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        gray: {
          50: '#f2f2f2',
          100: '#d9d9d9',
          200: '#bfbfbf',
          500: '#737373'
        },
        // ...
      },
    },
  },
})

export default theme