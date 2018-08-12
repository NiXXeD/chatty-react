import React from 'react'
// import CloseIcon from 'material-ui/svg-icons/navigation/close'
// import ReplyIcon from 'material-ui/svg-icons/content/reply'
import './Post.css'
import './shacktags.css'

class Post extends React.PureComponent {
    render() {
        let {post} = this.props
        let html = {__html: post.body}

        return (
            <React.Fragment>
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
                    {/*<CloseIcon className="actionItem"*/}
                               {/*title="Collapse post"*/}
                               {/*onClick={this.props.onCollapse}/>*/}
                    {/*<ReplyIcon className="actionItem"*/}
                               {/*title="Reply to post"*/}
                               {/*onClick={() => this.props.showReplyBox(post.threadId, post.id)}/>*/}
                    {/*<i className="actionItem fa fa-star" title="Pin to cloud" />*/}
                    {/*<a target="_blank">*/}
                    {/*<i className="actionItem fa fa-external-link" title="View at shacknews.com"/>*/}
                    {/*</a>*/}
                </div>
            </React.Fragment>
        )
    }
}

export default Post
