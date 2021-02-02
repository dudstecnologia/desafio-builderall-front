<template>
  <section>
    <div class="row">

      <div class="col-md-3 mb-3" v-for="p in getProducts" :key="p.id">
        <div>
          <img class="img-fluid w-100" :src="p.image_url">

          <div class="text-center pt-2">
            <h5>{{ p.name }}</h5>
            <hr>
            <h6 class="mb-3">$ {{ p.price / 100 }}</h6>
            <button type="button" class="btn btn-primary btn-sm mb-2" @click="addProductCart(p)">
              <i class="fas fa-shopping-cart pr-2"></i> Add to cart
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ListProduct',
  mounted () {
    this.getProductsApi(true)
  },
  methods: {
    ...mapActions('product', [
      'getProductsApi'
    ]),
    ...mapMutations('product', [
      'addProductCart'
    ])
  },
  computed: {
    ...mapGetters('product', [
      'getProducts',
      'getLoadingProducts'
    ])
  }
}
</script>
