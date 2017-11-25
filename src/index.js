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
import Page from 'containers/Page';

const history = createHistory();

render(
	<Provider store={store}>
		<Router history={history}>
			<App>
				<Switch>
					<Route exact path="/" component={Page} />
				</Switch>
			</App>
		</Router>
	</Provider>,
	document.getElementById('app'),
);
