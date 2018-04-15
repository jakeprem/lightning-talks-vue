import axios from 'axios'
import { storedToken } from '@/lib/utils.js'

let http = axios.create({
  baseURL: process.env.API_URL
})

http.interceptors.request.use(
  config => {
    const token = storedToken.get()
    if (token !== null) {
      config.headers['Authorization'] = `Token ${token}`
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

export const HTTP = http
