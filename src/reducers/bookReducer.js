import { GET_BOOKS, BOOK_SUCCESS } from '../actions/types';

const initialState = {
    loading: true,
    books: null
}

const bookReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_BOOKS:
            return {
                ...state,
                books: action.payload
            }
        case BOOK_SUCCESS:
            
            return{
                ...state,
                ...action.payload,
                loading: false,
                books: [...action.payload, ...state.books]
            }
        default : return state
    }
}

export default bookReducer