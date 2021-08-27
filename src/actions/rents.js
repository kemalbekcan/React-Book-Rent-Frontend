import { GET_RENTS, RENT_SUCCESS } from './types';
import axios from 'axios';

export const getRents = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/rents');
        dispatch({type: GET_RENTS, payload: res.data})
    } catch (err) {
        console.log('error')
    }
}

export const addRent = (userid, bookid, bookName, rentName, rentPrice) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8000/api/addrents', {userid, bookid, bookName, rentName, rentPrice});
        dispatch({type: RENT_SUCCESS, payload: res.data})
    } catch (err) {
        console.log('error');
    }
}