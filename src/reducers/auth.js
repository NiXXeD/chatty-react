import {LOGIN, LOGOUT} from '../actionTypes/auth'

let initialState
try {
    let credentials = JSON.parse(localStorage.getItem('auth')) || {}
    initialState = {
        username: credentials.username,
        password: credentials.password
    }
} catch (ex) {
    initialState = {
        username: null,
        password: null
    }
}

function auth(state = initialState, action) {
    let {type, payload} = action

    switch (type) {
        case LOGIN:
            return {...state, ...payload}

        case LOGOUT:
            return {
                ...state,
                username: null,
                password: null
            }

        default:
            return state
    }
}

export default auth
