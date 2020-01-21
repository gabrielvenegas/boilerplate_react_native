import axios from 'axios'
import env from '../constants/enviroment'

const URL = `${env.API_URL}api/PlanoPagamento`

export default {
  list: async () => {
    return axios.get(`${URL}/listar`)
  },
}
