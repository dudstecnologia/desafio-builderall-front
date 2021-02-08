<template>
  <div class="mb-3">
    <div v-if="productsCart.length === 0">
      <h5 class="mb-4">Your shopping cart is empty</h5>
      <b-link to="/" class="btn btn-light">Go to products</b-link>
    </div>
    <div v-else>
      <h5 class="mb-4">Cart (<span>{{ productsCart.length }}</span> items)</h5>

      <div v-for="p in productsCart" :key="p.id">
        <div class="row mb-4">
          <div class="col-md-4 col-lg-2 col-xl-2">
            <div class="mb-3 mb-md-0">
                <div class="mask">
                  <img class="img-fluid w-100" :src="p.image_url">
                </div>
            </div>
          </div>
          <div class="col-md-8 col-lg-10 col-xl-10">
            <div>
              <div class="d-flex justify-content-between">
                <div>
                  <h5>{{ p.name }}</h5>
                  <p class="mb-3 text-muted small">{{ p.quantity }} in stock</p>
                </div>
                <div class="mb-2">
                  <div class="input-group input-group-sm mb-0">
                    <div class="input-group-prepend">
                      <button class="btn btn-outline-secondary" 
                        @click="setQuantityProductCart([p, p.qt_cart - 1])" 
                        :disabled="p.qt_cart == 1">
                        <i class="fas fa-minus"></i>
                      </button>
                    </div>
                      <input type="number" class="form-control text-center" style="max-width: 80px" v-model="p.qt_cart" readonly>
                      <div class="input-group-append">
                        <button class="btn btn-outline-secondary" 
                          @click="setQuantityProductCart([p, p.qt_cart + 1])" 
                          :disabled="p.qt_cart == p.quantity">
                          <i class="fas fa-plus"></i>
                        </button>
                      </div>
                  </div>

                  <small id="passwordHelpBlock" class="form-text text-muted text-center">$ {{ p.price | productPrice }}</small>
                </div>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <div>
                  <span type="button" class="small text-uppercase mr-3 text-danger" @click="delProductCart(p.id)">
                    <i class="fas fa-trash-alt mr-1"></i> Remove item
                  </span>
                </div>
                <p class="mb-0"><span><strong id="summary">$ {{ p.price | totalPrice(p.qt_cart) }}</strong></span></p>
              </div>
            </div>
          </div>
        </div>

        <hr class="mb-4">
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CartItems',
  methods: {
    ...mapMutations('product', [
      'setQuantityProductCart',
      'delProductCart'
    ])
  },
  filters: {
    productPrice (v) {
      return (v / 100).toFixed(2)
    },
    totalPrice (v, qt) {
      return (qt * v / 100).toFixed(2)
    }
  },
  computed: {
    ...mapState('product', [
      'productsCart'
    ])
  }
}
</script>
