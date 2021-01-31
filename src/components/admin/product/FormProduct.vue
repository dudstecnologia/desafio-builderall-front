<template>
  <span>
    <b-button class="mb-2" variant="success" @click="setModalForm(true)">Add Product</b-button>

    <b-modal title="Product registration" v-model="modalState" size="xl" hide-footer>
      <b-form @submit.prevent="submitProduct">
        <div class="row">
          <div class="col-md-8">
            <b-form-group label="Name" >
              <b-form-input v-model="form.name" placeholder="Enter email" required></b-form-input>
            </b-form-group>

            <div class="row">
              <div class="col-6">
                <b-form-group label="Price" >
                  <money class="form-control" placeholder="Enter price" v-model="form.price"></money>
                </b-form-group>
              </div>
              <div class="col-6">
                <b-form-group label="Quantity" >
                  <b-form-input type="number" v-model="form.quantity" placeholder="Enter quantity" required></b-form-input>
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

            <b-img :src="form.image | imageProduct" thumbnail></b-img>
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
      form: {
        name: '',
        price: 0,
        quantity: '',
        image: ''
      },
      money: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 2,
        masked: false
      }
    }
  },
  methods: {
    ...mapMutations('product', [
      'setModalForm'
    ]),
    submitProduct () {
      if (this.form.price === 0) {
        this.$swal.fire('Ops!', 'Enter product price', 'error')
        return 
      }
      if (this.form.image === '') {
        this.$swal.fire('Ops!', 'Select the product image', 'error')
        return
      }

      alert(JSON.stringify(this.form))
    },
    selectImage (e) {
      const files = [ ...e.target.files ]

      this.compress.compress(files, {
          size: 4,
          quality: .75
        }).then((data) => {
          this.form.image = data[0].data
        })
    }
  },
  filters: {
    imageProduct (v) {
      if (!v) return null

      return `data:image/png;base64, ${v}`
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
        this.setModalForm(false)
      }
    }
  }
}
</script>
