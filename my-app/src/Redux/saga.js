import { call, put, takeEvery, select, takeLatest } from 'redux-saga/effects'
import { loadingSuccess, loadingError, searchRepositoriesSuccess } from "./actions";
import { LOADING_REPOSITORIES, LOADING_NEXT_REPOSITORIES, SEARCH_REPOSITORIES } from "./constants";
import { id, search} from "./selectors";

function request(url) {
    return fetch(url).then(promise => promise.json()).then(list => list).catch(error => error)
}

function* fetchSearchRepositories() {
    try {
        const search = yield select(search)

        const list = yield call(request, `https://api.github.com/search/repositories?q=${search.replace(/['"]+/g, '')}`)

        yield put(searchRepositoriesSuccess(list))
    } catch (e) {
        yield put(loadingError(e))
    }
}

function* fetchNextRepositories() {
    debugger
    try {
        const id = yield select(id)

        const list = yield call(request, `https://api.github.com/repositories?since=${id}`)

        yield put(loadingSuccess(list))
    } catch (e) {
        yield put(loadingError(e))
    }
}

function* fetchRepositories() {
    try {
        const list = yield call(request, 'https://api.github.com/repositories')

        yield put(loadingSuccess(list));

    } catch (e) {
        yield put(loadingError(e));
    }
}

function* mySaga() {
    yield takeEvery(LOADING_REPOSITORIES, fetchRepositories);
    yield takeLatest(LOADING_NEXT_REPOSITORIES, fetchNextRepositories)
    yield takeLatest(SEARCH_REPOSITORIES, fetchSearchRepositories)
}

export default mySaga;