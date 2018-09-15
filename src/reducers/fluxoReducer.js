const INITIAL_STATE = {
    idFluxo: 0
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case "FLUXOGRAMA_FETECHED":
            return { ...state,
                idFluxo: action.payload
            }
        default:
            return state
    }
}