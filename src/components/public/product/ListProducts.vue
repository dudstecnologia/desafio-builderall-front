<template>
  <section>
    <div class="row">

      <div class="col-md-3 mb-3" v-for="p in getProducts" :key="p.id">
        <div>
          <a href="#!">
            <img class="img-fluid w-100" :src="p.image_url">
          </a>

          <div class="text-center pt-2">
            <h5>{{ p.name }}</h5>
            <hr>
            <h6 class="mb-3">$ {{ p.price / 100 }}</h6>
            <button type="button" class="btn btn-primary btn-sm mr-1 mb-2">
              <i class="fas fa-shopping-cart pr-2"></i> Add to cart
            </button>
            <button type="button" class="btn btn-outline-secondary btn-sm mr-1 mb-2">
              <i class="fas fa-info-circle pr-2"></i> Details
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'ListProduct',
  mounted () {
    this.getProductsApi(true)
  },
  methods: {
    ...mapActions('product', [
      'getProductsApi'
    ]),
  },
  computed: {
    ...mapGetters('product', [
      'getProducts',
      'getLoadingProducts'
    ])
  }
}
</script>
