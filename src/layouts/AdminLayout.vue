<template>
  <div>
    <navbar></navbar>
    <div class="container pt-2">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/admin/Navbar'

export default {
  name: 'AdminLayout',
  components: {
    Navbar
  }
}
</script>
