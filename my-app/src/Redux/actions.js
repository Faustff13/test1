import {
    LOADING,
    LOADING_ERROR,
    LOADING_REPOSITORIES,
    LOADING_SUCCESS
} from "./constants";

export function loadingRepositories() {
    return {
        type: LOADING_REPOSITORIES,
    }
}

export function loading() {
    return {
        type: LOADING,
    }
}

export function loadingError(error) {
    return {
        type: LOADING_ERROR,
        error: error,
    }
}

export function loadingSuccess(list) {
    console.log(list)
    return {
        type: LOADING_SUCCESS,
        list: list,
    }
}