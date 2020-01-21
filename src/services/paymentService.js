import axios from 'axios'
import env from '../constants/enviroment'

export default {
  getPaymentMethods: () => {
    return axios.get(`${env.API_URL}`)
  },
}
