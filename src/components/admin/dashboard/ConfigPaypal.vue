<template>
  <b-card header="PayPal Settings" header-bg-variant="dark" header-text-variant="white">
    <b-overlay :show="overlayStatus" rounded="sm">
      <b-form @submit.prevent="submitConfig">
        <div class="row">
          <div class="col-md-6">
            <b-form-group label="Client Id">
              <b-form-input v-model="form.client_id" required></b-form-input>
            </b-form-group>
          </div>
          <div class="col-md-6">
            <b-form-group label="Secret">
              <b-form-input v-model="form.secret" required></b-form-input>
            </b-form-group>
          </div>
        </div>

        <b-button type="submit" variant="primary">Save</b-button>
      </b-form>
    </b-overlay>
  </b-card>
</template>

<script>
export default {
  name: 'ConfigPaypal',
  data () {
    return {
      overlayStatus: false,
      form: {
        client_id: '',
        secret: ''
      }
    }
  },
  mounted () {
    this.getConfigPayPal()
  },
  methods: {
    submitConfig () {
      this.$http.post('/paypals', this.form)
        .then(() => {
          this.$swal.fire('Perfect!', 'Configuration saved successfully', 'success')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Error saving configuration', 'error')
        })
    },
    getConfigPayPal () {
      this.overlayStatus = true

      this.$http.get('/paypals')
        .then(({ data }) => {
          this.form.client_id = data.paypal.client_id
          this.form.secret = data.paypal.secret
        })
        .then(() => {
          this.overlayStatus = false
        })
    }
  }
}
</script>

<style>

</style>