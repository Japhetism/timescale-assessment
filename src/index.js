import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import Movies from './views/movies';

ReactDOM.render(
  <React.StrictMode>
    <Movies />
  </React.StrictMode>,
  document.getElementById('root')
);
