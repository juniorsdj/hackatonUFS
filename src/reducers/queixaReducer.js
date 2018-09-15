const INITIAL_STATE = {
    queixa: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "CHANGED_QUEIXA":
            return { ...state,
                queixa: action.payload
            }
        default:
            return state
    }
}