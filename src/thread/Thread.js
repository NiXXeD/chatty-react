import React from 'react'
import Post from './Post'
import Comments from './Comments'
import ReplyBox from '../replyBox/ReplyBox'
import {connect} from 'react-redux'
import './Thread.css'

class Thread extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            collapsed: false,
            expandedReplyId: null,
            replyBoxOpenForId: null
        }
    }

    expandReply = expandedReplyId => this.setState({expandedReplyId})
    collapseReply = () => this.setState({expandedReplyId: null})
    collapseThread = () => this.setState({collapsed: true})

    render() {
        let {thread} = this.props
        let {collapsed, expandedReplyId, replyBoxOpenForId} = this.state

        if (collapsed) {
            return null
        } else {
            return (
                <div className="Thread">
                    <div className="rootPost">
                        <Post
                            post={thread}
                            onCollapse={this.collapseThread}
                        />
                    </div>

                    {
                        replyBoxOpenForId === thread.id &&
                        <ReplyBox thread={thread} post={thread}/>
                    }

                    <div className="CommentsContainer">
                        <Comments
                            thread={thread}
                            replyIds={thread.replies}
                            expandedReplyId={expandedReplyId}
                            expandReply={this.expandReply}
                            collapseReply={this.collapseReply}
                        />
                    </div>
                </div>
            )
        }
    }
}

const mapStateToProps = (state, props) => ({
    thread: state.chatty.posts[props.threadId]
})
export default connect(mapStateToProps)(Thread)
