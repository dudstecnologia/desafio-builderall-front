import axios from 'axios'
import config from '../../config'

const http = axios.create({
  baseURL: config.API_URL
})

http.interceptors.response.use(undefined, (error) => {
  if (error && error.response.status === 401 && location.pathname !== '/login') {
    localStorage.removeItem('token')
    location = '/login'
  }
})

export default http
