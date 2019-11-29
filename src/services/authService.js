import axios from 'axios'
import env from 'boilerplate_app/src/constants/enviroment'

export default {
  login: async (username, password, grantType) => {
    const data = `username=${username}&password=${password}&activeDirectory=true&client_id=consoleApp&grant_type=password`
    return axios
      .post(`${env.API_URL}token`, data, {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      })
      .then(({ data }) => data)
  },
  register: async ({ name, birthDate, email, cpf, cell }) => {
    return axios.post(env.API_URL + 'account/register', {
      name,
      email,
      birthDate,
      cpf,
      cell,
    })
  },
}
