import {
    LOADING,
    LOADING_ERROR,
    LOADING_REPOSITORIES,
    LOADING_SUCCESS,
    LOADING_NEXT_REPOSITORIES,
    SEARCH_REPOSITORIES,
    SEARCH_REPOSITORIES_SUCCESS,
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
    return {
        type: LOADING_SUCCESS,
        list: list,
    }
}

export function loadingNextRepositories() {
    return {
        type: LOADING_NEXT_REPOSITORIES,
    }
}

export function searchRepositories(search = false) {
    return {
        type: SEARCH_REPOSITORIES,
        search: search,
    }
}

export function searchRepositoriesSuccess(list) {
    return {
        type: SEARCH_REPOSITORIES_SUCCESS,
        list: list,
    }
}