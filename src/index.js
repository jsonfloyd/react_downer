import React from 'react';
import { render } from 'react-dom';
import {
	Router,
	Route,
	Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';

import store from 'helpers/store';

import App from 'containers/App';

const history = createHistory();

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app'),
);
