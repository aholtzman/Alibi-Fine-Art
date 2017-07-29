import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './GlobalThemes'
import registerServiceWorker from './registerServiceWorker';
import 'zenscroll'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
