import http from '../../service/http'

export function getProductsApi (context) {
  context.commit('setLoadingProducts', true)
  http.get('/products')
    .then(({ data }) => {
      context.commit('setProducts', data.products)
    })
    .then(() => {
      context.commit('setLoadingProducts', false)
    })
}
