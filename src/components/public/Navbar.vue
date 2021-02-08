<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
    <b-navbar-brand to="/">E-Commerce</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item to="/" exact>Products</b-nav-item>
        <b-nav-item to="/cart">Cart <span class="badge badge-light">{{ cartValue }}</span></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Navbar',
  computed: {
    ...mapState('product', [
      'cartValue'
    ])
  }
}
</script>
