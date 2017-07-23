import React from 'react'
import Thread from '../thread/Thread'
import {connect} from 'react-redux'
import {fetchChatty} from '../actions/chatty'

class Chatty extends React.Component {
    render() {
        let {threadIds} = this.props
        return (
            <div style={styles.chatty}>
                {threadIds.map(threadId => <Thread key={threadId} threadId={threadId}/>)}
            </div>
        )
    }

    componentDidMount() {
        if (!this.props.threadIds.length) {
            this.props.fetchChatty()
        }
    }
}

const styles = {
    chatty: {
        margin: '8px',
        font: '12px/1.5 arial, helvetica, clean, sans-serif'
    }
}


const mapStateToProps = state => ({
    threadIds: state.chatty.threadIds
})
const mapDispatchToProps = {fetchChatty}
export default connect(mapStateToProps, mapDispatchToProps)(Chatty)
