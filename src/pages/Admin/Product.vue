<template>
  <div>
    <form-product></form-product>
    <table-product></table-product>
  </div>
</template>

<script>
import FormProduct from '../../components/admin/product/FormProduct'
import TableProduct from '../../components/admin/product/TableProduct'

export default {
  name: 'Product',
  components: {
    TableProduct,
    FormProduct
  }
}
</script>
