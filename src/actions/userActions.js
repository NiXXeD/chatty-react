export const expandReply = (threadId, postId) => ({
    type: 'EXPAND_REPLY',
    delta: {
        posts: {
            [threadId]: {
                expandedReplyId: postId
            }
        }
    }
})

export const collapseReply = (threadId, postId) => ({
    type: 'COLLAPSE_REPLY',
    delta: {
        posts: {
            [threadId]: {
                replyBoxOpenForId: null,
                expandedReplyId: null
            }
        }
    }
})

export const showReplyBox = (threadId, postId) => ({
    type: 'SHOW_REPLY_BOX',
    delta: {
        posts: {
            [threadId]: {
                replyBoxOpenForId: postId
            }
        }
    }
})

export const hideReplyBox = (threadId, postId) => ({
    type: 'HIDE_REPLY_BOX',
    delta: {
        posts: {
            [threadId]: {
                replyBoxOpenForId: null
            }
        }
    }
})
