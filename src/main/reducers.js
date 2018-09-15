import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form' 
import {reducer as toastrReducer} from 'react-redux-toastr'
import fluxoReducer from './../reducers/fluxoReducer'
import queixaReducer from './../reducers/queixaReducer'
import discriminadorReducer from './../reducers/discriminadorReducer'

const rootReducers = combineReducers({
    form: formReducer,
    toastr: toastrReducer,
    fluxograma: fluxoReducer,
    queixa: queixaReducer,
    discriminador: discriminadorReducer
})

export default rootReducers  