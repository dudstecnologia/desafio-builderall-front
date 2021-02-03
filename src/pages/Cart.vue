<template>
  <section>
    <div class="row">
      <div class="col-lg-8">
        <cart-items></cart-items>
      </div>
      <div class="col-lg-4">
        <cart-checkout></cart-checkout>
      </div>
    </div>
  </section>
</template>

<script>
import CartCheckout from '../components/public/cart/CartCheckout'
import CartItems from '../components/public/cart/CartItems'

export default {
  name: 'Cart',
  components: {
    CartCheckout,
    CartItems
  }
}
</script>
