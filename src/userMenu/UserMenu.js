import React from 'react'
import {connect} from 'react-redux'
import FlatButton from 'material-ui/FlatButton'
import Login from '../login/Login'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import {login, logout} from '../actions/auth'

class UserMenu extends React.Component {
    render() {
        let {username} = this.props.auth
        if (username) {
            return (
                <div>
                    <IconMenu
                        style={styles.userMenuButton}
                        iconButtonElement={<FlatButton>{username}</FlatButton>}
                        anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                    >
                        <MenuItem
                            primaryText="Logout"
                            onTouchTap={this.props.logout}
                        />
                    </IconMenu>
                </div>
            )
        } else {
            return <Login onLogin={this.props.login}/>
        }
    }
}

const styles = {
    userMenuButton: {
        marginTop: '6px'
    }
}

const mapStateToProps = state => ({
    auth: state.auth
})
const mapDispatchToProps = {login, logout}

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu)
