import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './components/App';

import { BrowserRouter } from 'react-router-dom';
//BrowserRouter encapsulates whole App and helps in routing/navigating  through it among different pages

import { Provider } from 'react-redux';
//Provider provides Store for various reducers  where the redux logic is written about managing state of app

import { createTheme, ThemeProvider } from '@mui/material/styles';
//ThemeProvider provides  theme  (as it encapsulates whole app) to  the  app among different pages

import store from './app/store';

import ToggleColorModeProvider from './utils/ToggleColorMode';
// const theme = createTheme({});

const root = document.getElementById('root');
render(
  <Provider store={store}>

    <ToggleColorModeProvider >
      <BrowserRouter>

        <App />

      </BrowserRouter>
    </ToggleColorModeProvider>
  </Provider>

  , root
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
