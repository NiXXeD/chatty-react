import {EVENTS_RECEIVED, RECEIVE_CHATTY, REQUEST_CHATTY} from '../actionTypes/chatty'

export const fetchChatty = () => {
    return async (dispatch, getStore, api) => {
        dispatch(requestChatty())

        let data = await api.getChatty(5)
        dispatch(receiveChatty(data.threads))
        // .then(() => fetch('https://winchatty.com/v2/getNewestEventId'))
        // .then(response => response.json())
        // .then(data => dispatch(waitForEvent(data.eventId)))
    }
}

export const requestChatty = () => ({type: REQUEST_CHATTY})
export const receiveChatty = threads => ({type: RECEIVE_CHATTY, payload: threads})
export const eventsReceived = events => ({type: EVENTS_RECEIVED, payload: events})

export const waitForEvent = lastEventId => {
    return async (dispatch, getStore, api) => {
        let data = await api.waitForEvent(lastEventId)
        dispatch(eventsReceived(data.events))
        if (data.lastEventId) {
            dispatch(waitForEvent(data.lastEventId))
        }
    }
}

