import {chain, cloneDeep, filter, find, includes, map, merge, pull, sortBy} from 'lodash'

const deltaActions = [
    'REQUEST_CHATTY',
    'EXPAND_REPLY',
    'COLLAPSE_REPLY',
    'SHOW_REPLY_BOX',
    'HIDE_REPLY_BOX'
]
function chatty(state = {}, action) {
    if (includes(deltaActions, action.type)) {
        return merge({}, state, action.delta)
    }

    let delta
    switch (action.type) {
        case 'RECEIVE_CHATTY':
            delta = action.delta
            delta.posts = buildChattyPosts(action.threads)
            return merge({}, state, delta)

        case 'EVENTS_RECEIVED':

    }

    return state
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

    let output = _.trim(input.slice(0, i))
    if (i < input.length || !output) {
        output += '...'
    }

    return output
}

export default chatty
