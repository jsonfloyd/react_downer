import { all, flush, fork, take } from 'redux-saga/effects';
import { channel } from 'redux-saga';

class SagasManager {
	constructor() {
		this.sagasWithArguments = channel();
	}

	addSagaToRoot(...sagaWithArguments) {
		this.sagasWithArguments.put([...sagaWithArguments]);
	}

	getRootSaga() {
		const sagasChannel = this.sagasWithArguments;

		return function* rootSaga() {
			const initialSagas = yield flush(sagasChannel);
			yield all(initialSagas.map(initialSagaWithArguments => fork(...initialSagaWithArguments)));

			while (true) {
				const dynamicSaga = yield take(sagasChannel);
				yield fork(...dynamicSaga);
			}
		};
	}
}

export default new SagasManager();
