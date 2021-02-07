<template>
  <div class="p-5">
    <b-overlay :show="overlayStatus" rounded="sm">
      <div class="text-center">
          <h1 class="h4 text-gray-900 mb-4">Welcome</h1>
      </div>
      <form class="user" method="POST" @submit.prevent="submitLogin">
        <div class="form-group">
          <b-form-input class="form-control-user" type="email" v-model="form.email" placeholder="Email" required></b-form-input>
        </div>
        <div class="form-group">
          <b-form-input class="form-control-user" type="password" v-model="form.password" placeholder="Password" required></b-form-input>
        </div>
        <b-button class="btn-user" type="submit" variant="primary" block>Login</b-button>
      </form>
      <hr>
      <div class="text-center">
          <a class="small" href="#">Forgot Password?</a>
      </div>
    </b-overlay>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
      overlayStatus: false,
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions('auth', [
      'setAuthToken'
    ]),
    submitLogin () {
      this.overlayStatus = true

      this.$http.post('/auth/login', this.form)
        .then(({ data }) => {
          this.setAuthToken(data.access_token)
          this.$router.push('/admin')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Credenciais inválidas', 'error')
        })
        .then(() => {
          this.overlayStatus = false
        })
    }
  }
}
</script>
