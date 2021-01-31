export function setProducts (state, value) {
  state.products = value
}

export function addProduct (state, value) {
  state.products.push(value)
}

export function delProduct (state, value) {
  state.products = state.products.filter(p => p.id !== value)
}

export function setLoadingProducts (state, value) {
  state.loadingProducts = value
}

export function setModalForm (state, value) {
  state.modalForm = value
}
