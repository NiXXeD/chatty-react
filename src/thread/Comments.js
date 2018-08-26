import React from 'react'
import Post from './Post'
// import ReplyBox from '../replyBox/ReplyBox'
import OneLine from './OneLine'

class Comments extends React.PureComponent {
    state = {}

    render() {
        const {replies = [], onCollapseReply, onExpandReply, expandedReplyId} = this.props

        return (
            <ul className="Comments">
                {
                    replies.map(reply =>
                        <li key={reply.id}>
                            {
                                expandedReplyId === reply.id ? (
                                    <React.Fragment>
                                        <Post
                                            post={reply}
                                            onCollapse={onCollapseReply}
                                        />
                                        {/*{*/}
                                        {/*replyBoxOpenForId === reply.id &&*/}
                                        {/*<ReplyBox thread={thread} post={reply}/>*/}
                                        {/*}*/}
                                    </React.Fragment>
                                ) : (
                                    <OneLine post={reply} onExpandReply={onExpandReply}/>
                                )
                            }
                            <Comments
                                replies={reply.posts}
                                expandedReplyId={expandedReplyId}
                                onExpandReply={onExpandReply}
                                onCollapseReply={onCollapseReply}
                            />
                        </li>
                    )
                }
            </ul>
        )
    }
}

export default Comments
