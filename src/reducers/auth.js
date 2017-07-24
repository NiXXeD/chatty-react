import {LOGIN, LOGOUT} from '../actionTypes/auth'

const initialState = {
    username: null,
    password: null
}

function auth(state = initialState, action) {
    let {type, payload} = action

    switch(type) {
        case LOGIN:
            return {...state, ...payload}

        case LOGOUT:
            return {...state, ...initialState}

        default:
            return state
    }
}

export default auth
