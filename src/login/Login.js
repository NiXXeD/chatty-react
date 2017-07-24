import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import TextField from 'material-ui/TextField'

class Login extends React.Component {
    state = {
        loginOpen: false
    }

    render() {
        return (
            <div>
                <FlatButton
                    style={styles.userMenuButton}
                    onTouchTap={this.openLogin}>
                    Login
                </FlatButton>
                <Dialog
                    title="Login"
                    style={styles.loginDialog}
                    onRequestClose={this.closeLogin}
                    repositionOnUpdate={false}
                    actions={[
                        <FlatButton
                            secondary={true}
                            onTouchTap={this.closeLogin}>
                            Cancel
                        </FlatButton>,
                        <FlatButton
                            onTouchTap={this.login}>
                            Login
                        </FlatButton>
                    ]}
                    open={this.state.loginOpen}
                >
                    <TextField
                        name="username"
                        floatingLabelText="Username"
                        ref={this.focusInput}
                        onChange={this.formChanged}
                    />
                    <br/>
                    <TextField
                        name="password"
                        floatingLabelText="Password"
                        type="password"
                        onChange={this.formChanged}
                    />
                </Dialog>
            </div>
        )
    }

    login = () => {
        let {username, password} = this.state
        this.setState({loginOpen: false})
        this.props.onLogin(username, password)
    }
    formChanged = event => this.setState({[event.target.name]: event.target.value})
    focusInput = input => input && input.focus()
    openLogin = () => this.setState({loginOpen: true})
    closeLogin = () => this.setState({loginOpen: false})
}

const styles = {
    userMenuButton: {
        marginTop: '6px'
    },
    loginDialog: {
        margin: '0px calc((100vw - 500px) / 2)',
        width: '400px'
    }
}

export default Login
