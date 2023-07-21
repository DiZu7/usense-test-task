// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.scss';
// import App from './App';

// const rootElement = document.querySelector('#root');

// ReactDOM.render(<App />, rootElement);

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';

// const root = ReactDOM.createRoot(document.getElementById('root'));
const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App />);
