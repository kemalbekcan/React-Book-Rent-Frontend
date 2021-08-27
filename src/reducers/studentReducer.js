import {GET_USER} from '../actions/types';

const initialState = {
    students: null,
    loading: true
}

const studentReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_USER:
            return {
                ...state,
                ...action.payload,
                loading: false,
                students: action.payload
            }
        default : return state
    }

}

export default studentReducer