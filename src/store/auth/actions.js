export function setAuthToken (context, value) {
    localStorage.setItem('token', value)
    context.commit('setIsAuth', true)
}
