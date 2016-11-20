import React, {Component} from 'react'
import Thread from '../thread/Thread'

import './chatty.scss'
class Chatty extends Component {
    render() {
        let {threads=[]} = this.props

        return <div className="Chatty">
            {threads.map(thread => {
                return <Thread key={thread.id} thread={thread}/>
            })}
        </div>
    }
}

export default Chatty
