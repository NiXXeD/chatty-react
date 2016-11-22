import React from 'react'
import Thread from '../thread/Thread'
import {filter} from 'lodash'

import './chatty.scss'
class Chatty extends React.PureComponent {
    render() {
        let {posts=[]} = this.props
        let threads = filter(posts, {parentId: 0})

        return <div className="Chatty">
            {threads.map(post => {
                return <Thread key={post.id} post={post} posts={posts}/>
            })}
        </div>
    }
}

export default Chatty
