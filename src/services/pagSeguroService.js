import axios from 'axios'
import env from '../constants/enviroment'

const URL = `${env.API_URL}api/PagSeguro`

export default {
  createSession: () => {
    return axios.get(`${URL}/CreateSession`)
  },
}
