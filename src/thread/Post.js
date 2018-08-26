import React from 'react'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Tooltip from '@material-ui/core/Tooltip'
import CloseIcon from '@material-ui/icons/Close'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ReplyIcon from '@material-ui/icons/Reply'
import {withStyles} from '@material-ui/core/styles'
import PostExpirationBar from './PostExpirationBar'
import PostDate from './PostDate'
import PostAuthor from './PostAuthor'
import './shacktags.css'

class Post extends React.PureComponent {
    render() {
        let {classes, post, onCollapse, onReply} = this.props
        let html = {__html: post.body}

        return (
            <Card className={classes.card}>
                <div className={classes.header}>
                    <PostAuthor author={post.author}/>

                    <span className={classes.flex}/>

                    <PostDate date={post.date}/>

                    {post.parentId === 0 && <PostExpirationBar date={post.date}/>}
                </div>

                <CardContent className={classes.content}>
                    <span dangerouslySetInnerHTML={html}/>
                </CardContent>

                <CardActions className={classes.actions} disableActionSpacing>
                    <Tooltip title='Collapse' enterDelay={350}>
                        <CloseIcon className={classes.toolbarButton} onClick={onCollapse}/>
                    </Tooltip>

                    <Tooltip title='Reply' enterDelay={350}>
                        <ReplyIcon className={classes.toolbarButton} onClick={onReply}/>
                    </Tooltip>

                    <Tooltip title='View Post @ Shacknews.com' enterDelay={350}>
                        <a
                            className={classes.toolbarButton}
                            target='_blank'
                            href={`http://www.shacknews.com/chatty?id=${post.id}#item_${post.id}`}
                        >
                            <ExitToAppIcon className={classes.toolbarButton}/>
                        </a>
                    </Tooltip>
                </CardActions>
            </Card>
        )
    }
}

const styles = {
    card: {
        backgroundColor: '#202224'
    },
    content: {
        color: 'lightgray',
        fontSize: 13,
        padding: '8px 16px'
    },
    header: {
        backgroundColor: '#373a3c',
        padding: '3px 3px 3px 16px',
        display: 'flex',
        flexDirection: 'row'
    },
    actions: {
        height: 34
    },
    flex: {
        flex: 1
    },
    toolbarButton: {
        width: 18,
        height: 18,
        cursor: 'pointer',
        color: '#fff',
        marginRight: 6
    }
}

export default withStyles(styles)(Post)
