<template>
  <div>
    <h1>Dashboard</h1>
    <div class="row">
      <div class="col-md-12 mb-3">
        <top-selling-products></top-selling-products>
      </div>
      <div class="col-md-12">
        <config-paypal></config-paypal>
      </div>
    </div>
  </div>
</template>

<script>
import TopSellingProducts from '../../components/admin/dashboard/TopSellingProducts'
import ConfigPaypal from '../../components/admin/dashboard/ConfigPaypal'

export default {
  name: 'Dashboard',
  components: {
    TopSellingProducts,
    ConfigPaypal
  },
}
</script>
