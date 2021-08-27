import axios from "axios";
import {GET_AUTHOR, AUTHOR_SUCCESS, AUTHOR_DELETE} from './types';

export const getUser = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/authors')
        dispatch({type: GET_AUTHOR, payload: res.data})
    } catch (err) {
        console.log(err)
    }
}

export const addAuthor = (name, surname, age, birthday, deathday) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8000/api/addauthor', {name, surname, age, birthday, deathday});
        dispatch({type: AUTHOR_SUCCESS, payload: res.data})
    } catch (err) {
        console.log(err)
    }
}

export const deleteAuthor = (id) => async dispatch => {
    try {
        const res = await axios.post('http://localhost:8000/api/deleteauthor', {id})
        dispatch({type: AUTHOR_DELETE, payload: res.data})
    } catch (err) {
        console.log('err')
    }
}