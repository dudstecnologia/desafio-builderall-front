<template>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <div class="container">
    <b-navbar-brand to="/admin">E-Commerce</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item to="/admin" exact>Dashboard</b-nav-item>
        <b-nav-item to="/admin/product">Product</b-nav-item>
        <b-nav-item to="/admin/purchase">Purchase</b-nav-item>
        <b-nav-item @click="logout">Logout</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Navbar',
  methods: {
    ...mapActions('auth', [
      'removeAuthToken'
    ]),
    logout () {
      this.removeAuthToken()
      this.$router.replace('/login')
    }
  }
}
</script>
