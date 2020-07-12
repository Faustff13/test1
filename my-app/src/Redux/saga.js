import { call, put, takeEvery } from 'redux-saga/effects'
import { loadingSuccess, loadingError } from "./actions";
import { LOADING_REPOSITORIES } from "./constants";

function request(url) {
    return fetch(url).then(promise => promise.json()).then(list => list).catch(error => error)
}

const url = 'https://api.github.com/repositories'

function* fetchRepositories() {
    try {
        const list = yield call(request, url)

        yield put(loadingSuccess(list));

    } catch (e) {
        yield put(loadingError());
    }
}

function* mySaga() {
    yield takeEvery(LOADING_REPOSITORIES, fetchRepositories);
}

export default mySaga;