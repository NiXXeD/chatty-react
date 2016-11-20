import React, {Component} from 'react'
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card'
import FlatButton from 'material-ui/FlatButton'

import './Thread.scss'
class Thread extends Component {
    render() {
        let {thread} = this.props

        return <Card className="Thread">
            <CardHeader title={thread.author}/>
            <CardText>{thread.body}</CardText>
            <CardActions>
                <FlatButton label="Action1"/>
                <FlatButton label="Action2"/>
            </CardActions>
        </Card>
    }
}

export default Thread
