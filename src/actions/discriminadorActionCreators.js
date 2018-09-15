import Axios from 'axios'
import {
    toastr
} from 'react-redux-toastr'


const INITIAL_VALUES = {}

export function setDiscriminador(discriminador) {
    return {
        type: "DISCRIMINADOR_FETECHED",
        payload: discriminador
    }
}