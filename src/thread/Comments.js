import React from 'react'
import {connect} from 'react-redux'
import * as userActionCreators from '../actions/userActions'
import Post from './Post'
import ReplyBox from '../replyBox/ReplyBox'
import './Comments.css'

class Comments extends React.PureComponent {
    render() {
        let {thread, post, posts} = this.props

        return <ul className="Comments">
            {post.replies.map(replyId => {
                let reply = posts[replyId]

                return <li key={reply.id}>
                    {thread.expandedReplyId === reply.id ? (
                        <div>
                            <div className="replyPost"><Post post={reply}/></div>

                            {thread.replyBoxOpenForId === reply.id &&
                            <ReplyBox thread={thread} post={reply}/>
                            }
                        </div>
                    ) : (
                        <div>
                            <span className="oneline oneline9"
                                  onClick={() => this.props.expandReply(reply.threadId, reply.id)}>
                                {reply.oneline}
                            </span>
                            <span className="commentSeparator">:</span>
                            <span className="user">{reply.author}</span>
                        </div>
                    )}
                    <Self thread={thread} post={reply} posts={posts}/>
                </li>
            })}
        </ul>
    }
}

const Self = connect(null, userActionCreators)(Comments)
export default Self
