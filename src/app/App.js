import React from 'react'
import {Route, Switch} from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Theme from './Theme'
import Nav from '../nav/Nav'
import Chatty from '../chatty/Chatty'

class App extends React.Component {
    render() {
        return (
            <div>
                <style>{rootStyle}</style>
                <MuiThemeProvider muiTheme={Theme}>
                    <div>
                        <Nav/>
                        <Switch>
                            <Route path="/chatty" component={Chatty}/>

                            <Route component={Chatty}/>
                        </Switch>
                    </div>
                </MuiThemeProvider>
            </div>
        )
    }
}

const rootStyle = `
    body {
        background-color: black;
        margin: 0;
        padding: 0;
    }
    
    a {
        color: #aeae9b;
    }
`

export default App
