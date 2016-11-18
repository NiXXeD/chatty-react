import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './Theme'
import Nav from '../nav/Nav'
import Chatty from '../chatty/Chatty'

import './App.scss'
class App extends Component {
    constructor() {
        super()

        console.log(Theme)
    }

    render() {
        return <MuiThemeProvider muiTheme={Theme}>
            <div>
                <Nav/>
                <Chatty/>
            </div>
        </MuiThemeProvider>
    }
}

export default App
