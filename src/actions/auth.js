import axios from 'axios';
import { LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from './types';
import setAuthToken from '../utils/setAuthToken';

export const register = (name, surname, email, adress, age, password, password_confirmation) => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.post('http://localhost:8000/api/register', {name, surname, email, adress, age, password, password_confirmation})
        dispatch({type: REGISTER_SUCCESS, payload: res.data})
    } catch (err) {
        console.log('err')
    }
}

export const loginUser = (email, password) => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }
    try {
        const res = await axios.post('http://localhost:8000/api/login', {email, password})
        dispatch({type: LOGIN_SUCCESS, payload: res.data})
        window.location.href = '/' 
    } catch (err) {
        console.log('err')
    }
}

export const logout = () => dispatch => {
    try {
        dispatch({type: LOGOUT})
        localStorage.removeItem('token')
        localStorage.removeItem('user')
    } catch (err) {
        console.log(err)
    }
}
