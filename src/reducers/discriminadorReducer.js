const INITIAL_STATE = {
    discriminador: {}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "DISCRIMINADOR_FETECHED":
            return { ...state,
                discriminador: action.payload
            }
        default:
            return state
    }
}