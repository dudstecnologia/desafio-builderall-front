export function setProducts (state, value) {
  state.products = value
}

export function addProduct (state, value) {
  const checkProduct = state.products.findIndex(e => e.id === value.id)

  if (checkProduct >= 0) {
    state.products.splice(checkProduct, 1, value)
  } else {
    state.products.push(value)
  }
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

export function setSelectedProduct (state, value) {
  state.selectedProduct = value
}
