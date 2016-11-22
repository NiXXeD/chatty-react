export const expandReply = id => ({
    type: 'EXPAND_REPLY',
    id,
    data: {
        posts: {
            [id]: {
                expanded: true
            }
        }
    }
})

export const collapseReply = id => ({
    type: 'COLLAPSE_REPLY',
    id,
    data: {
        posts: {
            [id]: {
                expanded: false
            }
        }
    }
})
