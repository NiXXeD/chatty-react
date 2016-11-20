import React, {Component} from 'react'

import './Post.scss'
import './shacktags.scss'
class Post extends Component {
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

                {/*<div className="actionbar">*/}
                    {/*<i className="actionItem fa fa-close" title="Collapse post" />*/}
                    {/*<i className="actionItem fa fa-comment" title="Reply to post" />*/}
                    {/*<a target="_blank">*/}
                        {/*<i className="actionItem fa fa-bookmark" title="Open in tab" />*/}
                    {/*</a>*/}
                    {/*<i className="actionItem fa fa-star" title="Pin to cloud" />*/}
                    {/*<a target="_blank">*/}
                        {/*<i className="actionItem fa fa-external-link" title="View at shacknews.com"/>*/}
                    {/*</a>*/}
                {/*</div>*/}
            </div>
        )
    }
}

export default Post
