
const data = {
    list: [],
    loading: false,
    error: false,
}

export default function Reducer(state = data, action) {
    switch (action.type) {
        case 'LOADING_REPOSITORIES':
            return state

        case 'LOADING':
            return {
                ...state,
                loading: true,
                error: false,
            }

        case 'LOADING_ERROR':
            return {
                ...state,
                loading: false,
                error: action.error || true,
            }
        case 'LOADING_SUCCESS':
            return {
                ...state,
                loading: false,
                error: false,
                list: action.list,
            }
        default: return state
    }
}
