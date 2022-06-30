import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import FontStyles from './services/Theme/FontStyles';

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
