import React from 'react'
import {connect} from 'react-redux'
import * as userActionCreators from '../actions/userActions'
import {TagGroups} from './TagGroups'
import FlatButton from 'material-ui/FlatButton'

import './ReplyBox.scss'
class ReplyBox extends React.PureComponent {
    render() {
        let {thread, post} = this.props

        return <div className={`replybox ${thread.id === post.id ? 'replybox-op' : 'replybox-comment'}`}>
            <form>
                <textarea className="replybox-input"
                          placeholder="Type something interesting..."
                          name="replyBody"
                          required/>

                <br/>

                <div className="replybox-actions">
                    <FlatButton label="Submit"/>
                    <FlatButton label="Cancel" onClick={() => this.props.hideReplyBox(thread.id, post.id)}/>
                </div>
            </form>

            <table className="tagLegend">
                <tbody>
                {TagGroups.map((tagGroup, index) =>
                    <tr key={index}>
                        {tagGroup.map(tag => ([
                                <td>
                                    <span className={tagGroup[0].tag_class}>{tagGroup[0].name}</span>
                                </td>,
                                <td className="tagLegendClicky">
                                    <span>{`${tagGroup[0].open} ... ${tagGroup[0].close}`}</span>
                                </td>
                            ])
                        )}
                    </tr>
                )}
                </tbody>
            </table>
        </div>
    }
}

export default connect(null, userActionCreators)(ReplyBox)
