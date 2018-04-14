import axios from 'axios'

let returnData = resp => resp.data
let logResp = resp => console.log(resp)
let logError = err => console.error(err)

let baseURL = process.env.AUTH_URL

export default {
  login (email) {
    return axios({method: 'POST', baseURL, url: 'auth/email/', data: { email } })
      .then(returnData)
      .catch(logError)
  },
  verify (token) {
    return axios({method: 'POST', baseURL, url: 'callback/auth/', data: { token } })
      .then(returnData)
      .catch(logError)
  }
}
