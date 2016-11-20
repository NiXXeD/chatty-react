import React, {Component} from 'react'
import {connect} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './Theme'
import Nav from '../nav/Nav'
import LinearProgress from 'material-ui/LinearProgress'
import Chatty from '../chatty/Chatty'
import {fetchChatty} from '../actions/chatty'

import './App.scss'
class App extends Component {
    render() {
        const { chatty: { isFetching }} = this.props

        return <MuiThemeProvider muiTheme={Theme}>
            <div>
                <Nav/>
                {isFetching ? <LinearProgress color="orange" mode="indeterminate" /> : ''}
                <Chatty threads={this.props.chatty.threads}/>
            </div>
        </MuiThemeProvider>
    }

    componentDidMount() {
        // load chatty immediately
        this.props.dispatch(fetchChatty())
    }
}

function mapStateToProps(state) {
    return state || {isFetching: true}
}

export default connect(mapStateToProps)(App)
