import { put, all, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import sagasManager from 'helpers/sagasManager';

const GET_DATA_REQUEST = 'todos/GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'todos/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'todos/GET_DATA_ERROR';

const initialState = {
	data: 'No data',
};


export default function content(state = initialState, action = {}) {
	switch (action.type) {
	case GET_DATA_SUCCESS:
		return {
			...state,
			data: action.data,
		};
	default:
		return state;
	}
}

export function handleGetData(data) {
	return {
		type: GET_DATA_REQUEST,
		data,
	};
}

function* getData(action) {
	try {
		const { data } = action;
		yield put({ type: GET_DATA_SUCCESS, data });
	} catch (error) {
		yield put({ type: GET_DATA_ERROR });
	}
}

sagasManager.addSagaToRoot(function* watcher() {
	yield all([
		takeLatest(GET_DATA_REQUEST, getData),
	]);
});
