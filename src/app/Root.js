import React from 'react'
import {MuiThemeProvider} from '@material-ui/core/styles'
import Theme from './Theme'
import App from './App'
import AuthProvider from '../context/auth/AuthProvider'

class Root extends React.Component {
    render() {
        return (
            <React.Fragment>
                <style>{rootStyle}</style>
                <MuiThemeProvider theme={Theme}>
                    <AuthProvider>
                        <App/>
                    </AuthProvider>
                </MuiThemeProvider>
            </React.Fragment>
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

export default Root
