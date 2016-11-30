import {chain, cloneDeep, filter, find, map, merge, pull, sortBy} from 'lodash'

function chatty(state = {}, action) {
    switch (action.type) {
        case 'REQUEST_CHATTY':
            return Object.assign({}, state, {isFetching: true})

        case 'RECEIVE_CHATTY':
            return Object.assign({}, state, {
                isFetching: false,
                ...buildChatty(action.threads)
            })

        case 'EVENTS_RECEIVED':

        case 'EXPAND_REPLY':
            return merge({}, state, action.delta)

        case 'COLLAPSE_REPLY':
            return merge({}, state, action.delta)

        default:
            return state
    }
}

function buildChatty(chatty) {
    let posts = chain(chatty)
        .map('posts')
        .flatten()
        .map((post, index, array) => {
            post.oneline = getSnippet(post.body)
            post.replies = map(filter(array, {parentId: post.id}), 'id')
            return post
        })
        .keyBy('id')
        .value()

    return {posts}
}

function getSnippet(body) {
    let stripped = body.replace(/<embed\-content url="([^"]+)" type="[^"]+"><\/embed\-content>/gi, '$1')
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
