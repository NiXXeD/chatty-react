import {
    COLLAPSE_THREAD, EXPAND_THREAD, EXPAND_REPLY, COLLAPSE_REPLY, SHOW_REPLY_BOX, HIDE_REPLY_BOX
} from '../actionTypes/thread'

export const collapseThread = threadId => ({type: COLLAPSE_THREAD, payload: threadId})
export const expandThread = threadId => ({type: EXPAND_THREAD, payload: threadId})

export const expandReply = (threadId, postId) => ({type: EXPAND_REPLY, payload: {threadId, postId}})
export const collapseReply = threadId => ({type: COLLAPSE_REPLY, payload: {threadId}})

export const showReplyBox = (threadId, postId) => ({type: SHOW_REPLY_BOX, payload: {threadId, postId}})
export const hideReplyBox = threadId => ({type: HIDE_REPLY_BOX, payload: {threadId}})
