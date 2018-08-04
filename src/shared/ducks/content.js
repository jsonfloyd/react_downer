import { put, all, call, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import sagasManager from 'helpers/sagasManager';

const GET_DATA_REQUEST = 'todos/GET_DATA_REQUEST';
const GET_DATA_SUCCESS = 'todos/GET_DATA_SUCCESS';
const GET_DATA_ERROR = 'todos/GET_DATA_ERROR';

const initialState = {
	data: 'No data1',
	tree: {
		name: 'root',
		type: 'folder',
		childrens : [
		 	{
				name : 'f1',
				type: 'folder',
				childrens: [
					{
						name: 'f1f1',
						type: 'file',
						childrens : []
					}
				]
			},
			{
				name : 'f2',
				type: 'folder',
				childrens: [
					{
						name: 'f2f1',
						type: 'file',
						childrens : []
					},
					{
						name : 'f22',
						type: 'folder',
						childrens: [
							{
								name: 'f22f1',
								type: 'file',
								childrens : []
							}
						]
					},
				]
			},
			{
				name : 'f3',
				type: 'folder',
				childrens: [
					{
						name: 'f3f1',
						type: 'file',
						childrens : []
					}
				]
			}
		]
	}
};


export default function content(state = initialState, action = {}) {
	switch (action.type) {
	case GET_DATA_SUCCESS:
		return {
			...state,
			data: action.data,
			tree: action.tree
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
