import {chain, filter, map, trim} from 'lodash'
import {RECEIVE_CHATTY, REQUEST_CHATTY, EVENTS_RECEIVED} from '../actionTypes/chatty'

const initialState = {
    posts: {},
    threadIds: [],
    collapsedThreads: [],
    replyBoxOpenForId: null
}

function chatty(state = initialState, action) {
    let {type, payload} = action

    switch (type) {
        // Chatty actions
        case REQUEST_CHATTY:
            return {...state, ...payload}
        case RECEIVE_CHATTY:
            let posts = buildChattyPosts(payload)
            let threadIds = findThreadIds(posts)
            return {...state, posts, threadIds}
        case EVENTS_RECEIVED:
            // TODO handle events
            break

        default:
            return state
    }
}

function findThreadIds(posts) {
    return chain(posts)
        .filter({parentId: 0})
        .filter(post => !post.hidden)
        .map('id')
        .value()
}

function buildChattyPosts(chatty) {
    return chain(chatty)
        .map('posts')
        .flatten()
        .map((post, index, array) => {
            post.oneline = getSnippet(post.body)
            post.replies = map(filter(array, {parentId: post.id}), 'id')
            return post
        })
        .keyBy('id')
        .value()
}

function getSnippet(body) {
    let stripped = body.replace(/<embed-content url="([^"]+)" type="[^"]+"><\/embed-content>/gi, '$1')
    stripped = stripped.replace(/(<(?!span)(?!\/span)[^>]+>| tabindex="1")/gm, ' ')
    return htmlSnippet(stripped, 106)
}

function htmlSnippet(input, maxLength) {
    let i = 0
    let len = 0
    let tag = false
    let char = false
    while (i < input.length && len < maxLength) {
        if (input[i] === '<') {
            tag = true
        } else if (input[i] === '>') {
            tag = false
        } else if (input[i] === '&') {
            char = true
        } else if (input[i] === '' && char) {
            char = false
            len++
        } else if (!tag) {
            len++
        }

        i++
    }

    let output = trim(input.slice(0, i))
    if (i < input.length || !output) {
        output += '...'
    }

    return output
}

export default chatty
