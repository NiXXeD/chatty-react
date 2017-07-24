import {createStore, applyMiddleware} from 'redux'

// Middleware
import {connectRouter, routerMiddleware} from 'connected-react-router'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {createLogger} from 'redux-logger'

import WinChattyApi from './WinChattyApi'
import history from './history'
import reducer from './reducers'

const composeEnhancers = composeWithDevTools({})

const initialState = {}
const store = createStore(
    connectRouter(history)(reducer),
    initialState,
    composeEnhancers(
        applyMiddleware(
            routerMiddleware(history),
            thunk.withExtraArgument(new WinChattyApi()),

            // Note: must be last in chain
            createLogger()
        )
    )
)

export default store
