import Axios from 'axios'
import {
    toastr
} from 'react-redux-toastr'


const INITIAL_VALUES = {}

export function setFluxo(id) {
    return {
        type: "FLUXOGRAMA_FETECHED",
        payload: id
    }
}