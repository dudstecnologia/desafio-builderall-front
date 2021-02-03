<template>
  <div class="mb-3">
    <div v-if="productsCart.length > 0">
      <h5 class="mb-3">The total amount of</h5>

      <ul class="list-group list-group-flush">
        <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
          <div>
            <strong>Total</strong>
          </div>
          <span><strong>$ {{ cartValue }}</strong></span>
        </li>
      </ul>

      <!-- <button type="button" class="btn btn-primary btn-block">go to checkout</button> -->
      <!-- <div id="paypal-button-container"></div> -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'CartCheckout',
  computed: {
    ...mapState('product', [
      'productsCart',
      'cartValue'
    ])
  }
}
</script>
