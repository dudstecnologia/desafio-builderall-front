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
import { mapState } from 'vuex'

export default {
  name: 'CartCheckout',
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
            // Call your server to set up the transaction
            createOrder: (data, actions) => {
              return this.$http.post('/teste', { cart: this.productsCart })
                .then((res) => {
                  return res.data;
                }).then((data) => {
                  return data.id;
                });
            },
            // Call your server to finalize the transaction
            onApprove: function(data, actions) {
                return fetch('/demo/checkout/api/paypal/order/' + data.orderID + '/capture/', {
                    method: 'post'
                }).then(function(res) {
                    return res.json();
                }).then(function(orderData) {
                    // Three cases to handle:
                    //   (1) Recoverable INSTRUMENT_DECLINED -> call actions.restart()
                    //   (2) Other non-recoverable errors -> Show a failure message
                    //   (3) Successful transaction -> Show confirmation or thank you

                    // This example reads a v2/checkout/orders capture response, propagated from the server
                    // You could use a different API or structure for your 'orderData'
                    var errorDetail = Array.isArray(orderData.details) && orderData.details[0];

                    if (errorDetail && errorDetail.issue === 'INSTRUMENT_DECLINED') {
                        return actions.restart(); // Recoverable state, per:
                        // https://developer.paypal.com/docs/checkout/integration-features/funding-failure/
                    }

                    if (errorDetail) {
                        var msg = 'Sorry, your transaction could not be processed.';
                        if (errorDetail.description) msg += '\n\n' + errorDetail.description;
                        if (orderData.debug_id) msg += ' (' + orderData.debug_id + ')';
                        return alert(msg); // Show a failure message
                    }

                    // Show a success message
                    alert('Transaction completed by ' + orderData.payer.name.given_name);
                });
            }
          }).render('#paypal-button-container')
        })
        .catch(() => {
          // Failed to fetch script
        })
    }
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
