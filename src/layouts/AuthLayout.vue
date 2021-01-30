<template>
  <div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-xl-10 col-lg-12 col-md-9">
                <div class="card o-hidden border-0 shadow-lg my-5">
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-6 d-none d-lg-block">
                              <img class="img-fluid" src="../assets/login.jpg">
                            </div>
                            <div class="col-lg-6">
                              <router-view></router-view>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '../assets/sb-admin-2.css'

export default {
  name: 'AuthLayout'
}
</script>
