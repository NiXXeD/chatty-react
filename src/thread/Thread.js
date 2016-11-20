import React, {Component} from 'react'
import Post from './Post'
import Comments from './Comments'

import './Thread.scss'
class Thread extends Component {
    render() {
        let {thread} = this.props

        return <div className="Thread">
            <div className="rootPost">
                <Post post={thread}/>
            </div>

            {/*reply box*/}

            <div className="CommentsContainer">
                <Comments replies={thread.replies}/>
            </div>
        </div>
    }
}

export default Thread
