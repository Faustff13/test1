
export const data = {
    list: [],
    loading: false,
    error: false,
    id_last_rep: false,
    search: false,
}

export default function Reducer(state = data, action) {
    switch (action.type) {
        case 'LOADING_REPOSITORIES':
         return {
             ...state,
             search: false,
             error: false,
         }

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
            const list = state.list.concat(action.list)
            const listLength = list.length
            const lastRepId = list[listLength - 1].id

            return {
                ...state,
                loading: false,
                error: false,
                list: list,
                id_last_rep: lastRepId,
            }
        case 'SEARCH_REPOSITORIES':
            if (!action.search) {
                return {
                    ...state,
                    search: false
                }
            } else return {
                ...state,
                search: action.search,
                id_last_rep: false,
                list: []
            }
        case 'SEARCH_REPOSITORIES_SUCCESS':
            return {
                ...state,
                list: action.list,
            }
        default: return state
    }
}
