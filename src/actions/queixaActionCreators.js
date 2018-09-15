import Axios from 'axios'
import {
    toastr
} from 'react-redux-toastr'


const INITIAL_VALUES = {}

export function changeQueixas(queixa) {
    return {
        type: "CHANGED_QUEIXA",
        payload: queixa
    }
}