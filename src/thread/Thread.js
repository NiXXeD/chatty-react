import React from 'react'
import Post from './Post'
import {find, sortBy, keyBy} from 'lodash'
import Comments from './Comments'
// import ReplyBox from '../replyBox/ReplyBox'
import './Thread.css'

class Thread extends React.PureComponent {
    state = {
        thread: {},
        replies: []
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

    render() {
        let {thread, replies} = this.state

        return (
            <div className="Thread">
                <div className="rootPost">
                    <Post
                        post={thread}
                        onCollapse={this.collapseThread}
                    />
                </div>

                {/*{*/}
                {/*replyBoxOpenForId === thread.id &&*/}
                {/*<ReplyBox thread={thread} post={thread}/>*/}
                {/*}*/}

                <div className="CommentsContainer">
                    <Comments
                        replies={replies}
                    />
                </div>
            </div>
        )
    }
}

export default Thread
