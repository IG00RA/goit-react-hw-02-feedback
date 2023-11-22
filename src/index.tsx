import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from './components/App';

const theme = {
  colors: {
    green: 'rgb(0 150 0)',
    red: 'rgb(180 0 0)',
    white: '#fff',
    gray: 'rgb(220 220 220)',
    darkGrey: 'rgb(156 156 156)',
    black: 'rgb(47 47 47)',
  },
};
const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </React.StrictMode>
  );
} else {
  console.error('Element with id "root" not found.');
}
