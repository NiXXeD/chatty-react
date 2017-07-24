import {combineReducers} from 'redux'
import auth from './auth'
import chatty from './chatty'
import settings from './settings'

const rootReducer = combineReducers({
    auth,
    chatty,
    settings
})

export default rootReducer
