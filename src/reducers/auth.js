import {LOGIN_SUCCESS, REGISTER_SUCCESS, LOGOUT } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: JSON.parse(localStorage.getItem('user')),
}

const auth = (state = initialState, action) => {
    switch(action.type){
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('user', JSON.stringify(action.payload.user))
            return {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                loading: false,
                user: action.payload
            }
        case LOGOUT:
            return{
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false,
                user: null
            }
        default: return state
    }
}

export default auth