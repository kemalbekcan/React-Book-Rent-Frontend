import axios from "axios";
import { GET_BOOKS, BOOK_SUCCESS } from './types';

export const getBooks = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/books');
        dispatch({type: GET_BOOKS, payload: res.data})
    } catch (err) {
        console.log('error')
    }
}


export const addBook = (bookName, barcodeNo, pageNumber, image, price) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8000/api/addbooks', {bookName, barcodeNo, pageNumber, image, price})
        dispatch({type: BOOK_SUCCESS, payload: res.data})
    } catch (err) {
        console.log('error')
    }
}