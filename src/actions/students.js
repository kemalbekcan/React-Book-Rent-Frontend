import axios from "axios";
import { GET_USER } from './types';

export const getStudents = () => async dispatch => {
    try {
        const res = await axios.get('http://localhost:8000/api/students')
        dispatch({type: GET_USER, payload: res.data})
        console.log('data', res.data)
    } catch (err) {
        console.log('err')
    }
}