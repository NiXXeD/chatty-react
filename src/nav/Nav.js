import React from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import UserMenu from '../userMenu/UserMenu'

class Nav extends React.Component {
    state = {
        drawerOpen: false,
        loginOpen: false,
        username: '',
        password: ''
    }

    render() {
        return <div>
            <AppBar
                title="React Chatty"
                onLeftIconButtonTouchTap={this.openDrawer}
                iconElementRight={<UserMenu/>}
            />

            <Drawer
                containerClassName="NavDrawer"
                docked={false}
                open={this.state.drawerOpen}
                onRequestChange={open => this.setState({drawerOpen: open})}
            >
                <MenuItem onTouchTap={this.closeDrawer}>Menu Item 1</MenuItem>
                <MenuItem onTouchTap={this.closeDrawer}>Menu Item 2</MenuItem>
                <MenuItem onTouchTap={this.closeDrawer}>Menu Item 3</MenuItem>
            </Drawer>
        </div>
    }

    openDrawer = () => this.setState({drawerOpen: true})
    closeDrawer = () => this.setState({drawerOpen: false})
}

export default Nav
