export function setAuthToken (context, value) {
  localStorage.setItem('token', value)
  context.commit('setIsAuth', true)
}

export function removeAuthToken (context) {
  localStorage.removeItem('token')
  context.commit('setIsAuth', false)
}
