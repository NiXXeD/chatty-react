import React from 'react'
import Thread from '../thread/Thread'
import {chain} from 'lodash'
import './Chatty.css'

class Chatty extends React.PureComponent {
    render() {
        let {posts = []} = this.props
        let threads = chain(posts)
            .filter({parentId: 0})
            .filter(post => !post.hidden)
            .value()

        return <div className="Chatty">
            {threads.map(post => <Thread key={post.id} post={post} posts={posts}/>)}
        </div>
    }
}

export default Chatty
