import React from 'react'
import Post from './Post'
import {find, sortBy, keyBy} from 'lodash'
import Comments from './Comments'
// import ReplyBox from '../replyBox/ReplyBox'
import './Thread.css'

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
        const replies = posts.filter(post => post.parentId === thread.id)

        this.setState({thread, replies})
    }

    handleCollapseReply = () => this.setState({expandedReplyId: null})
    handleExpandReply = expandedReplyId => this.setState({expandedReplyId})
    handleCollapse = () => this.setState({collapsed: true})

    render() {
        let {collapsed, thread, replies, expandedReplyId} = this.state
        if (collapsed) return null

        return (
            <div className="Thread">
                <Post
                    post={thread}
                    onCollapse={this.handleCollapse}
                />

                {/*{*/}
                {/*replyBoxOpenForId === thread.id &&*/}
                {/*<ReplyBox thread={thread} post={thread}/>*/}
                {/*}*/}

                <div className="CommentsContainer">
                    <Comments
                        replies={replies}
                        expandedReplyId={expandedReplyId}
                        onExpandReply={this.handleExpandReply}
                        onCollapseReply={this.handleCollapseReply}
                    />
                </div>
            </div>
        )
    }
}

export default Thread
