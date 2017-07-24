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
                    open={this.state.loginOpen}
                >
                    <form name="loginForm" onSubmit={this.login}>
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

                        <div style={styles.loginActionsContainer}>
                            <FlatButton
                                tabIndex={99}
                                type="button"
                                secondary={true}
                                onTouchTap={this.closeLogin}
                            >
                                Cancel
                            </FlatButton>
                            <FlatButton type="submit">Login</FlatButton>
                        </div>
                    </form>
                </Dialog>
            </div>
        )
    }

    login = event => {
        event.preventDefault()

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
    },
    loginActionsContainer: {
        marginTop: '16px',
        display: 'flex',
        justifyContent: 'space-between'
    }
}

export default Login
