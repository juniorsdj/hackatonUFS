import Axios from 'axios'

const URL_API = "http://e-risk.herokuapp.com/api"

const Requests = {
    fluxograma: {
        getFluxos: () => {
            const request = Axios.get(`${URL_API}/fluxos`)
            return request
        }
    },
    discriminadores: {
        getDiscriminadores: (idFluxo) =>{
            const request = Axios.get(`${URL_API}/fluxos/${idFluxo}/discriminadores`)
            return request
        }
    }
}

export default Requests