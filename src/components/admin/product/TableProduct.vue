<template>
  <div class="table-responsive">
    <b-table class="text-nowrap" :fields="fields" :items="getProducts" :busy="getLoadingProducts" head-variant="light">
      <template #cell(id)="data">
        <b-button class="mr-1" variant="primary" size="sm" @click="editProduct(data.item.id)">
          <i class="fa fa-edit"></i>
        </b-button>
        <b-button variant="danger" size="sm" @click="exclusionAlert(data.item)">
          <i class="fa fa-trash"></i>
        </b-button>
      </template>
      <template #cell(image)="data">
        <b-img rounded :src="data.item.image_url" width="50" :alt="`Image of ${data.item.name}`"></b-img>
      </template>
      <template #table-busy>
        <div class="text-center my-2">
          <b-spinner class="align-middle"></b-spinner>
          <strong>Searching for products...</strong>
        </div>
      </template>
    </b-table>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  data () {
    return {
      fields: [
        { key: 'id', label: 'Action' },
        'name',
        'price',
        'quantity',
        'image'
      ]
    }
  },
  mounted () {
    this.getProductsApi()
  },
  methods: {
    ...mapActions('product', [
      'getProductsApi',
      'getSingleProductApi'
    ]),
    ...mapMutations('product', [
      'delProduct'
    ]),
    exclusionAlert (product) {
      this.$swal.fire({
        title: 'Atenção',
        text: `Confirms the deletion of "${product.name}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes',
        cancelButtonText: 'No',
      }).then((res) => {
        if (res.isConfirmed) {
          this.deleteProduct(product.id)
        }
      })
    },
    deleteProduct (id) {
      this.$http.delete(`/products/${id}`)
        .then(() => {
          this.delProduct(id)
          this.$swal.fire('Perfect', 'Product successfully deleted', 'success')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Error deleting the product', 'error')
        })
    },
    editProduct (id) {
      this.getSingleProductApi(id)
    }
  },
  computed: {
    ...mapGetters('product', [
      'getProducts',
      'getLoadingProducts'
    ])
  }
}
</script>
