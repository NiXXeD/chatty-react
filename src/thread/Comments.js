import React from 'react'
import Post from './Post'
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
                                expandedReplyId === reply.id
                                    ? <Post post={reply} onCollapse={onCollapseReply}/>
                                    : <OneLine post={reply} onExpandReply={onExpandReply}/>
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
