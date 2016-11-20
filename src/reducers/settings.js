const settings = (state = {}, action) => {
    switch (action.type) {
        case 'SETTINGS':
            console.log('SETTINGS', action)
            return Object.assign({}, state, {
                whatever: true
            })
        default:
            return state
    }
}

export default settings
