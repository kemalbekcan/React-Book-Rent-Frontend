import { GET_RENTS, RENT_SUCCESS} from '../actions/types';

const initialState = {
    loading: true,
    rents: null
}

const rentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RENTS:
            return {
                ...state,
                rents: action.payload
            }
        case RENT_SUCCESS:
            return {
                ...state,
                rents: [...action.payload, ...state.rents]
            }
        default: return state
    }

}

export default rentReducer