function chatty(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_CHATTY':
            return Object.assign({}, state, {
                isFetching: true
            })
        case 'RECEIVE_CHATTY':
            return Object.assign({}, state, {
                isFetching: false,
                threads: action.threads.map(thread => ({
                    key: thread.id,
                    author: thread.posts[0].author,
                    body: thread.posts[0].body,
                    posts: thread.posts
                }))
            })
        case 'EVENTS_RECEIVED':

        default:
            return state
    }
}

export default chatty
