import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './styles/theme'
import { BrowserRouter } from 'react-router-dom';
import './i18n';

ReactDOM.render(  
        <BrowserRouter>
          <ChakraProvider  theme={theme}>
              <App />
          </ChakraProvider>
        </BrowserRouter>,
  document.getElementById('root')
);

