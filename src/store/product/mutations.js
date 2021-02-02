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

export function addProductCart (state, value) {
  const productIndex = state.productsCart.findIndex(e => e.id === value.id)

  if (productIndex >= 0) {
    state.productsCart[productIndex].qt_cart++
  } else {
    value.qt_cart = 1
    state.productsCart.push(value)
  }

  localStorage.setItem('cart', JSON.stringify(state.productsCart))

  this.commit('product/updateValueCart')
}

export function setProductsCart (state, value) {
  state.productsCart = value

  this.commit('product/updateValueCart')
}

export function updateValueCart (state) {
  let valueTemp = 0

  state.productsCart.forEach((prod) => {
    valueTemp += prod.price * prod.qt_cart
  })

  state.cartValue = (valueTemp / 100).toFixed(2)
}
