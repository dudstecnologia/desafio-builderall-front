<template>
  <div>
    <h1>Dashboard</h1>
    <config-paypal></config-paypal>
  </div>
</template>

<script>
import ConfigPaypal from '../../components/admin/dashboard/ConfigPaypal'

export default {
  name: 'Dashboard',
  components: {
    ConfigPaypal
  },
}
</script>
