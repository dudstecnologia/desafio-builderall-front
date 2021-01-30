<template>
  <div class="p-5">
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
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Login',
  data () {
    return {
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
      this.$http.post('/auth/login', this.form)
        .then(({ data }) => {
          this.setAuthToken(data.access_token)
          this.$router.replace('/admin')
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Credenciais inválidas', 'error')
        })
    }
  }
}
</script>
