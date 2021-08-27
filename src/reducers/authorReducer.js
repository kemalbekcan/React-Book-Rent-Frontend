import { GET_AUTHOR, AUTHOR_SUCCESS, AUTHOR_DELETE } from '../actions/types';

const initialState = {
    loading: true,
    authors: null
};

const authorReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_AUTHOR:
            return {
                ...state,
                ...action.payload,
                loading: false,
                authors: action.payload
            }
        case AUTHOR_SUCCESS:
            return {
                ...state,
                loading: false,
                authors: [...action.payload, ...state.authors]
            }
        case AUTHOR_DELETE:
            return {
                ...state,
                authors: state.items.filter((author, index) => index !== action.payload)
            }
        default: return state
    }

}

export default authorReducer