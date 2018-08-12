import { put, all, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import sagasManager from 'helpers/sagasManager';
import parse from 'helpers/parser';

const GET_DATA_REQUEST = 'todos/GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'todos/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'todos/GET_DATA_ERROR';

const initialState = {
	data: 'No data1',
	tree: {
		name: 'f47',
		type: 'folder',
		childrens: [
		],
	},
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
		console.log(action); // Not working TODO: Utto, pochemu not working?
		const { data } = yield (axios.get('/api/show/' + action.data + '.json'));
		console.log(data.data);
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
