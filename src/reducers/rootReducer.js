import { combineReducers } from 'redux';
import auth from './auth';
import bookReducer from './bookReducer';
import studentReducer from './studentReducer';
import authorReducer from './authorReducer'
import rentReducer from './rentReducer';

const rootReducer = combineReducers({
    auth: auth,
    student: studentReducer,
    author: authorReducer,
    book: bookReducer,
    rent: rentReducer
})

export default rootReducer