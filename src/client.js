/* global window, document */

import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './application/ConfigureStore';
import BrowserRoutes from './application/BrowserRoutes';
import reducer from './reducers';

const initial = window.initialState;
const store = ConfigureStore(reducer, initial);

ReactDOM.render(<BrowserRoutes store={store} />, document.querySelector('html').parentNode);

