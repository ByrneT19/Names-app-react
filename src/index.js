import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'normalize-css';
import Data from './data/Data';

ReactDOM.render(<App data={Data}/>, document.getElementById('root'));