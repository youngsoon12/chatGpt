import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Abc from './Abc';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <Abc />
  </React.StrictMode>
);
