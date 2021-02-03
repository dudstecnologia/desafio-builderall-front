<template>
  <div>
    <navbar></navbar>
    <div class="container pt-3">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/public/Navbar'
import { mapActions } from 'vuex'

export default {
  name: 'PublicLayout',
  components: {
    Navbar
  },
  mounted () {
    this.getProductsCart()
    this.getPaypalClientIdApi()
  },
  methods: {
    ...mapActions('product', [
      'getProductsCart'
    ]),
    ...mapActions('auth', [
      'getPaypalClientIdApi'
    ])
  }
}
</script>
