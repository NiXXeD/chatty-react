import {chain, filter, find, pull, sortBy} from 'lodash'

function chatty(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_CHATTY':
            return Object.assign({}, state, {isFetching: true})
        case 'RECEIVE_CHATTY':
            let chatty = fixChatty(action.threads)
            return Object.assign({}, state, {
                isFetching: false,
                posts: chatty.posts,
                threads: chatty.threads
            })
        case 'EVENTS_RECEIVED':

        default:
            return state
    }
}

function fixChatty(newThreads) {
    let posts = chain(newThreads)
        .map('posts')
        .flatten()
        .map((post, index, array) => {
            post.replies = filter(array, {parentId: post.id})
            return post
        })
        .value()

    let threads = chain(posts)
        .filter({parentId: 0})
        .value()

    return {posts, threads}
}

export default chatty
