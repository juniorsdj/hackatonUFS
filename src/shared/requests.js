import Axios from 'axios'

const URL_API = "http://76750e81.ngrok.io/api"

const Requests = {
    fluxograma: {
        getFluxos: () => {
            const request = Axios.get(`${URL_API}/fluxos`)
            return request
        }
    },
    discriminadores: {
        getDiscriminadores: (idFluxo) =>{
            const request = Axios.post(`${URL_API}/discriminadores/${idFluxo}`)
            return request
        }
    }
}

export default Requests