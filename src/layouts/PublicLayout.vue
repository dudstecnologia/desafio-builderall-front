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

export default {
  name: 'PublicLayout',
  components: {
    Navbar
  },
}
</script>
