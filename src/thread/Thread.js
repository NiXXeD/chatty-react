import React from 'react'
import Post from './Post'
import Comments from './Comments'

import './Thread.scss'
class Thread extends React.PureComponent {
    render() {
        let {post, posts} = this.props

        return <div className="Thread">
            <div className="rootPost">
                <Post post={post}/>
            </div>

            {/*reply box*/}

            <div className="CommentsContainer">
                <Comments thread={post} post={post} posts={posts}/>
            </div>
        </div>
    }
}

export default Thread
