import React from 'react'
import {connect} from 'react-redux'
import Post from './Post'
import ReplyBox from '../replyBox/ReplyBox'
import './Comments.css'

class Comments extends React.Component {
    render() {
        let {
            thread, expandedReplyId, replyBoxOpenForId, replies = []
        } = this.props

        return (
            <ul className="Comments">
                {
                    replies.map(reply =>
                        <li key={reply.id}>
                            {
                                expandedReplyId === reply.id ? (
                                    <div>
                                        <div className="replyPost">
                                            <Post
                                                post={reply}
                                                onCollapse={this.props.collapseReply}
                                            />
                                        </div>
                                        {
                                            replyBoxOpenForId === reply.id &&
                                            <ReplyBox thread={thread} post={reply}/>
                                        }
                                    </div>
                                ) : (
                                    <div>
                                        <span className="oneline oneline9"
                                              onClick={() => this.props.expandReply(reply.id)}>
                                            {reply.oneline}
                                        </span>
                                        <span className="commentSeparator">:</span>
                                        <span className="user">{reply.author}</span>
                                    </div>
                                )
                            }
                            <Self
                                thread={thread}
                                replyIds={reply.replies}
                                expandedReplyId={expandedReplyId}
                                expandReply={this.props.expandReply}
                                collapseReply={this.props.collapseReply}
                            />
                        </li>
                    )
                }
            </ul>
        )
    }
}

const mapStateToProps = (state, props) => ({
    replies: props.replyIds.map(replyId => state.chatty.posts[replyId])
})
const Self = connect(mapStateToProps)(Comments)
export default Self
