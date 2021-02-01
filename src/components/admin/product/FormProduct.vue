<template>
  <span>
    <b-button class="mb-2" variant="success" @click="setModalForm(true)">Add Product</b-button>

    <b-modal title="Product registration" v-model="modalState" size="xl" no-close-on-backdrop hide-footer>
      <b-form @submit.prevent="submitProduct">
        <div class="row">
          <div class="col-md-8">
            <b-form-group label="Name" >
              <b-form-input v-model="form.name" placeholder="Enter email" required></b-form-input>
            </b-form-group>

            <div class="row">
              <div class="col-6">
                <b-form-group label="Price" >
                  <money class="form-control" placeholder="Enter price" v-model="form.price" v-bind="money"></money>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Quantity" >
                  <b-form-input type="number" v-model="form.quantity" placeholder="Enter quantity" required></b-form-input>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Currency" >
                  <b-form-input v-model="form.currency" placeholder="Enter currency" required></b-form-input>
                </b-form-group>
              </div>
            </div> 
          </div>
          <div class="col-md-4">
            <b-form-group label="Image" >
              <b-form-file 
                v-model="imageTemp"
                accept="image/jpeg, image/png"
                placeholder="Choose a file or drop it here..."
                drop-placeholder="Drop file here..."
                @change="selectImage">
              </b-form-file>
            </b-form-group>

            <b-img :src="imageSelected" v-if="selectedProduct && !imageTemp" thumbnail></b-img>
            <b-img :src="form.image | imageProduct" v-if="imageTemp" thumbnail></b-img>
          </div>
        </div>
        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-modal>
  </span>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
const Compress = require('compress.js')
import { Money } from 'v-money'

export default {
  name: 'FormProduct',
  components: {
    Money
  },
  data () {
    return {
      compress: new Compress(),
      modalState: false,
      imageTemp: null,
      imageSelected: null,
      form: {
        name: '',
        price: '',
        quantity: '',
        currency: '',
        image: ''
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: true
      }
    }
  },
  methods: {
    ...mapMutations('product', [
      'setModalForm',
      'setSelectedProduct',
      'addProduct'
    ]),
    submitProduct () {
      let validate = this.formValidate()

      if (validate !== true) {
        this.$swal.fire('Ops!', validate, 'error')
        return
      }

      this.$http({
          method: this.selectedProduct ? 'PUT' : 'POST',
          url: this.selectedProduct ? `/products/${this.selectedProduct.id}` : '/products',
          data: this.form
        })
        .then(({ data }) => {
          this.addProduct(data.product)
          this.setModalForm(false)
          this.$swal.fire('Perfect!', 'Product successfully saved', 'success')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Error saving product', 'error')
        })
    },
    formValidate () {
      if ([this.form['name'], this.form['price'], this.form['quantity'], this.form['currency']].includes('')) {
        return 'Fill in the required fields'
      }

      if (!this.selectedProduct && this.form['image'] === '') {
        return 'The product image is necessary for the creation'
      }

      if (this.form['price'] === '0,00') {
        return 'Enter product price'
      }

      return true;
    },
    selectImage (e) {
      const files = [ ...e.target.files ]

      this.compress.compress(files, {
          size: 4,
          quality: .75
        }).then((data) => {
          this.form.image = data[0].data
        })
    },
    clearForm () {
      this.form.name = ''
      this.form.price = ''
      this.form.quantity = ''
      this.form.currency = ''
      this.form.image = ''
      this.imageTemp = null
      this.imageSelected = null
    }
  },
  filters: {
    imageProduct (v) {
      return `data:image/jpg;base64, ${v}`
    }
  },
  computed: {
    ...mapState('product', [
      'modalForm',
      'selectedProduct'
    ])
  },
  watch: {
    modalForm (v) {
      this.modalState = v
    },
    modalState (v) {
      if (!v) {
        this.clearForm()
        this.setModalForm(false)
        this.setSelectedProduct(null)
      }

      if (v && this.selectedProduct) {
        this.form.name = this.selectedProduct.name
        this.form.price = this.selectedProduct.price / 100
        this.form.quantity = this.selectedProduct.quantity
        this.form.currency = this.selectedProduct.currency
        this.imageSelected = this.selectedProduct.image_url
      }
    }
  }
}
</script>
