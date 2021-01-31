import axios from 'axios'
import config from '../../config'

const http = axios.create({
  baseURL: config.API_URL
})

http.interceptors.request.use((config) => {
  if (localStorage.getItem('token')) {
    const token = localStorage.getItem('token')
    config.headers.Authorization =  `Bearer ${token}`
  }

  return config;
});

http.interceptors.response.use(undefined, (error) => {
  if (error && error.response.status === 401 && location.pathname !== '/login') {
    localStorage.removeItem('token')
    location = '/login'
  }
})

export default http
