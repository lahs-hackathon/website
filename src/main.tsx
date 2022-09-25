import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom';
import CustomTheme from 'theme/CustomTheme';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CustomTheme>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </CustomTheme>
  </React.StrictMode>
);
