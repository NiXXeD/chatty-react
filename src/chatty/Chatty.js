import React from 'react'
import Thread from '../thread/Thread'
import {chain} from 'lodash'
import {connect} from 'react-redux'
import {fetchChatty} from '../actions/chatty'

class Chatty extends React.PureComponent {
    render() {
        let {posts} = this.props
        let threads = chain(posts)
            .filter({parentId: 0})
            .filter(post => !post.hidden)
            .value()

        return (
            <div style={styles.chatty}>
                {threads.map(post => <Thread key={post.id} post={post} posts={posts}/>)}
            </div>
        )
    }

    componentDidMount() {
        this.props.fetchChatty()
    }
}

const styles = {
    chatty: {
        margin: '8px',
        font: '12px/1.5 arial, helvetica, clean, sans-serif'
    }
}


const mapStateToProps = state => ({
    threads: state.chatty.threads,
    posts: state.chatty.posts
})
const mapDispatchToProps = dispatch => ({
    fetchChatty: () => dispatch(fetchChatty())
})
export default connect(mapStateToProps, mapDispatchToProps)(Chatty)
