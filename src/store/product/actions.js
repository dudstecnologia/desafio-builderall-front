import http from '../../service/http'

export function getProductsApi (context, publ = false) {
  context.commit('setLoadingProducts', true)
  http.get(publ ? '/list-products' : '/products')
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
