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

      <div id="paypal-button-container"></div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'CartCheckout',
  data () {
    return {
      overlayStatus: false
    }
  },
  mounted () {
    if (this.paypalClientId && this.productsCart.length > 0) {
      this.paypalInit()
    }
  },
  methods: {
    paypalInit () {
      this.$loadScript(`https://www.paypal.com/sdk/js?client-id=${this.paypalClientId}&currency=BRL`)
        .then(() => {
         paypal.Buttons({
            createOrder: (data, actions) => {
              return this.$http.post('/purchase-store', { cart: this.productsCart })
                .then((res) => {
                  return res.data
                }).then((data) => {
                  return data.id
                });
            },
            onApprove: (data, actions) => {
              return this.$http.get('/purchase-capture/' + data.orderID)
                .then((res) => {
                    return res.data;
                }).then((orderData) => {
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you

                    var errorDetail = Array.isArray(orderData.details) && orderData.details[0]

                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                        return actions.restart()
                    }

                    if (errorDetail) {
                        var msg = 'Sorry, your transaction could not be processed.'
                        if (errorDetail.description) msg += '\n\n' + errorDetail.description
                        if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')'

                        this.$swal.fire('Ops!', msg, 'error')

                        return null
                    }

                    this.clearCart()
                    this.$swal.fire('Perfect', 'Transaction completed, thank you', 'success')
                    this.$router.replace('/')
                });
            }
          }).render('#paypal-button-container')
        })
    },
    ...mapMutations('product', [
      'clearCart'
    ])
  },
  watch: {
    paypalClientId (v) {
      if (v && this.productsCart.length > 0) {
        this.paypalInit()
      }
    }
  },
  computed: {
    ...mapState('product', [
      'productsCart',
      'cartValue'
    ]),
    ...mapState('auth', [
      'paypalClientId'
    ])
  }
}
</script>
