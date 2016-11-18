import React from 'react'
import {render} from 'react-dom'

// for material-ui tap events
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

// main app component
import './index.scss'
import App from './app/App'
render(<App/>, document.querySelector('#app'))
