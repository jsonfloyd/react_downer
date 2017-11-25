import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import ducks from 'ducks';

import sagasManager from 'helpers/sagasManager';

const initialState = window.__INITIAL_STATE__;
const sagaMiddleware = createSagaMiddleware();

const store = createStore(ducks, initialState, compose(
	applyMiddleware(sagaMiddleware),
	window.devToolsExtension ? window.devToolsExtension() : f => f,
));

sagaMiddleware.run(sagasManager.getRootSaga());

export default store;
