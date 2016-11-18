import React, {Component} from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import './Nav.scss'
class Nav extends Component {
    state = {
        open: false
    }

    constructor(props) {
        super(props)

        this.openDrawer = this.openDrawer.bind(this)
        this.closeDrawer = this.closeDrawer.bind(this)
    }

    render() {
        return <div>
            <AppBar
                title="React Chatty"
                onLeftIconButtonTouchTap={this.openDrawer}
            />
            <Drawer
                containerClassName="NavDrawer"
                docked={false}
                open={this.state.open}
                onRequestChange={open => this.setState({open})}
            >
                <MenuItem onTouchTap={this.closeDrawer}>Menu Item 1</MenuItem>
                <MenuItem onTouchTap={this.closeDrawer}>Menu Item 2</MenuItem>
                <MenuItem onTouchTap={this.closeDrawer}>Menu Item 3</MenuItem>
            </Drawer>
        </div>
    }

    openDrawer() {
        this.setState({open: true})
    }

    closeDrawer() {
        this.setState({open: false})
    }
}

export default Nav
