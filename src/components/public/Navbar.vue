<template>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <div class="container">
    <b-navbar-brand href="#">E-Commerce</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav class="ml-auto">

        <b-nav-item to="/" exact>Products</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
