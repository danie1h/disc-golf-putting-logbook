import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PuttingLogApp from './PuttingLogApp';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<PuttingLogApp />, document.getElementById('root'));

serviceWorker.unregister();
