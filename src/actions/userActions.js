export const expandReply = (threadId, postId) => ({
    type: 'EXPAND_REPLY',
    delta: {
        posts: {
            [threadId]: {
                expandedReply: postId
            }
        }
    }
})

export const collapseReply = (threadId, postId) => ({
    type: 'COLLAPSE_REPLY',
    delta: {
        posts: {
            [threadId]: {
                expandedReply: null
            }
        }
    }
})
