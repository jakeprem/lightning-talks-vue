import axios from 'axios'
import { storedJWT } from '@/lib/utils.js'

let http = axios.create({
  baseURL: process.env.API_URL
})

http.interceptors.request.use(
  config => {
    const jwt = storedJWT.get()
    if (jwt !== null) {
      config.headers['Authorization'] = `Bearer ${jwt}`
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export const HTTP = http
