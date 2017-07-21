import {combineReducers} from 'redux'
import chatty from './chatty'
import settings from './settings'

const rootReducer = combineReducers({
    chatty,
    settings
})

export default rootReducer
