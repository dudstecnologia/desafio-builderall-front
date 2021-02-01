<template>
  <div>
    <list-products></list-products>
  </div>
</template>

<script>
import ListProducts from '../components/public/product/ListProducts'

export default {
  name: 'Index',
  components: {
    ListProducts
  },
}
</script>
