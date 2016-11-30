import React from 'react'
import {connect} from 'react-redux'
import * as userActionCreators from '../actions/userActions'
import CloseIcon from 'material-ui/svg-icons/navigation/close'
import ReplyIcon from 'material-ui/svg-icons/content/reply'

import './Post.scss'
import './shacktags.scss'
class Post extends React.PureComponent {
    render() {
        let {post} = this.props
        let html = {__html: post.body}

        return (
            <div>
                <div className="postheader">
                    <span className="user">{post.author}</span>

                    <div className="headerright">
                        <div className="postdate">{post.date}</div>

                        <div className="countdown-wrap">
                            <div className="countdown-value"/>
                        </div>
                    </div>
                </div>

                <div className="postBody postBodyText" dangerouslySetInnerHTML={html}/>

                <div className="actionbar">
                    <CloseIcon className="actionItem"
                               title="Collapse post"
                               onClick={() => this.props.collapseReply(post.threadId, post.id)}/>
                    <ReplyIcon className="actionItem"
                               title="Reply to post"
                               onClick={() => this.props.showReplyBox(post.threadId, post.id)}/>
                    {/*<i className="actionItem fa fa-star" title="Pin to cloud" />*/}
                    {/*<a target="_blank">*/}
                    {/*<i className="actionItem fa fa-external-link" title="View at shacknews.com"/>*/}
                    {/*</a>*/}
                </div>
            </div>
        )
    }
}

export default connect(null, userActionCreators)(Post)
