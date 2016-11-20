import React, {Component} from 'react'

import './Comments.scss'
class Comments extends Component {
    render() {
        let {replies = []} = this.props

        return <ul className="Comments">
            {replies.map(reply => {
                return <li key={reply.id}>
                    <div>
                        <span className="oneline oneline9">{reply.body.slice(0, 100)}</span>
                        <span className="commentSeparator">:</span>
                        <span className="user">{reply.author}</span>
                    </div>

                    <Comments replies={reply.replies}/>
                </li>
            })}
        </ul>
    }
}

export default Comments
