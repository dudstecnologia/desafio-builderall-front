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

export function getSingleProductApi (context, id) {
  http.get(`/products/${id}`)
    .then(({ data }) => {
      context.commit('setSelectedProduct', data.product)
      context.commit('setModalForm', true)
    })
}
