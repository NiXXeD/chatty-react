import React from 'react'
import Post from './Post'
import Comments from './Comments'
import ReplyBox from '../replyBox/ReplyBox'

import './Thread.scss'
class Thread extends React.PureComponent {
    render() {
        let {post, posts} = this.props

        return <div className="Thread">
            <div className="rootPost">
                <Post post={post}/>
            </div>

            {post.replyBoxOpenForId === post.id &&
            <ReplyBox thread={post} post={post}/>
            }

            <div className="CommentsContainer">
                <Comments thread={post} post={post} posts={posts}/>
            </div>
        </div>
    }
}

export default Thread
