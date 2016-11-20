export const fetchChatty = () => {
    return dispatch => {
        dispatch(requestChatty())

        return fetch('https://winchatty.com/v2/getChatty?count=5')
            .then(response => response.json())
            .then(data => dispatch(receiveChatty(data.threads)))
            .then(() => fetch('https://winchatty.com/v2/getNewestEventId'))
            // .then(response => response.json())
            // .then(data => dispatch(waitForEvent(data.eventId)))
    }
}

export const requestChatty = () => ({
    type: 'REQUEST_CHATTY'
})

export const receiveChatty = threads => ({
    type: 'RECEIVE_CHATTY',
    threads
})

export const waitForEvent = lastEventId => {
    return dispatch => {
        return fetch(`https://winchatty.com/v2/waitForEvent?lastEventId=${lastEventId}`)
            .then(response => response.json())
            .then(data => {
                dispatch(eventsReceived(data.events))
                if (data.lastEventId) {
                    dispatch(waitForEvent(data.lastEventId))
                }
            })
    }
}

export const eventsReceived = events => ({
    type: 'EVENTS_RECEIVED',
    events
})
