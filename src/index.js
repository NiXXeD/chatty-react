import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import App from './app/App'
import injectTapEventPlugin from 'react-tap-event-plugin'
import store from './store'
import history from './history'

// for material-ui tap events
injectTapEventPlugin()

function render(Component) {
    ReactDOM.render(
        (
            <Provider store={store}>
                <BrowserRouter history={history}>
                    <Component/>
                </BrowserRouter>
            </Provider>
        ),
        document.getElementById('root')
    )
}

render(App)

if (module.hot) {
    module.hot.accept('./app/App', () => {
        const next = require('./app/App').default
        render(next)
    })
}
