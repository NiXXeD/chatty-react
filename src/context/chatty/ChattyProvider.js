import React from 'react'
import ChattyContext from './ChattyContext'

class ChattyProvider extends React.PureComponent {
    state = {}

    render() {
        return (
            <ChattyContext.Provider value={this.state}>
                {this.props.children}
            </ChattyContext.Provider>
        )
    }
}

export default ChattyProvider
