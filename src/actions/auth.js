import {LOGIN, LOGOUT} from '../actionTypes/auth'

export const login = (username, password) => {
    return async (dispatch, getStore, api) => {
        let result = await api.verifyCredentials(username, password)
        if (result.isValid) {
            localStorage.setItem('auth', JSON.stringify({username, password}))
            dispatch({type: LOGIN, payload: {username, password}})
        } else {
            console.error('Invalid credentials.')
        }
    }
}

export const logout = () => {
    localStorage.removeItem('auth')
    return {type: LOGOUT}
}
