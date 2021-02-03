import http from '../../service/http'

export function setAuthToken (context, value) {
  localStorage.setItem('token', value)
  context.commit('setIsAuth', true)
}

export function removeAuthToken (context) {
  localStorage.removeItem('token')
  context.commit('setIsAuth', false)
}

export function getPaypalClientIdApi (context) {
  http.get('/paypal-clientid')
    .then(({ data }) => {
      context.commit('setPaypalClientId', data.client_id)
    })
}
