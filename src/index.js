import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'

// for material-ui tap events
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// redux store
import configureStore from './configureStore'
const store = configureStore()

// main app component
import './index.scss'
import App from './app/App'
const root = (
    <Provider store={store}>
        <App/>
    </Provider>
)
render(root, document.querySelector('#app'))
