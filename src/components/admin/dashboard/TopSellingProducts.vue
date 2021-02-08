<template>
  <b-card header="Top selling products" header-bg-variant="dark" header-text-variant="white">
    <b-overlay :show="overlayStatus" rounded="sm">
      <chart-top-selling-products></chart-top-selling-products>
    </b-overlay>
  </b-card>
</template>

<script>
import ChartTopSellingProducts from '../../../mixins/ChartTopSellingProducts'

export default {
  name: 'TopSellingProducts',
  components: {
    ChartTopSellingProducts
  },
  data () {
    return {
      overlayStatus: false,
    }
  }
}
</script>

<style>
.chartjs-render-monitor {
  height: 250px !important;
}
</style>
