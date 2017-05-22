import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import App from './app/App'
import registerServiceWorker from './registerServiceWorker'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './configureStore'
import './index.scss'

// for material-ui tap events
injectTapEventPlugin()

// redux store
const store = configureStore()

// main app component
const root = (
    <Provider store={store}>
        <App/>
    </Provider>
)
ReactDOM.render(root, document.getElementById('root'))
registerServiceWorker()
