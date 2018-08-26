import React from 'react'
import Post from './Post'
import {find, sortBy, keyBy} from 'lodash'
import Comments from './Comments'
import {withStyles} from '@material-ui/core/styles'

class Thread extends React.PureComponent {
    state = {
        thread: {},
        collapsed: false,
        replies: [],
        expandedReplyId: null
    }

    componentDidMount() {
        const {thread: rawThread} = this.props

        const posts = sortBy(rawThread.posts, 'id')
        const postsById = keyBy(posts, 'id')

        const thread = find(posts, {parentId: 0})
        posts.forEach(post => {
            if (post.parentId) {
                const parent = postsById[post.parentId]
                parent.posts = parent.posts || []
                parent.posts.push(post)
            }
        })
        posts.slice(-10).reverse().forEach((post, index) => post.recentReplyNumber = index + 1)
        const replies = posts.filter(post => post.parentId === thread.id)

        this.setState({thread, replies})
    }

    handleCollapseReply = () => this.setState({expandedReplyId: null})
    handleExpandReply = expandedReplyId => this.setState({expandedReplyId})
    handleCollapse = () => this.setState({collapsed: true})

    render() {
        const {classes} = this.props
        const {collapsed, thread, replies, expandedReplyId} = this.state
        if (collapsed) return null

        return (
            <div className={classes.thread}>
                <Post
                    post={thread}
                    onCollapse={this.handleCollapse}
                />

                <Comments
                    replies={replies}
                    expandedReplyId={expandedReplyId}
                    onExpandReply={this.handleExpandReply}
                    onCollapseReply={this.handleCollapseReply}
                />
            </div>
        )
    }
}

const styles = {
    thread: {
        marginBottom: 15
    }
}

export default withStyles(styles)(Thread)
