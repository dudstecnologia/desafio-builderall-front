<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <b-form @submit.prevent="getPurchasesApi" inline>
        <label class="sr-only">Initial date</label>
        <b-form-input class="mb-2 mr-sm-2 mb-sm-0" v-model="form.start" v-mask="'##/##/####'" placeholder="Initial date" required></b-form-input>

        <label class="sr-only">Final date</label>
        <b-form-input class="mb-2 mr-sm-2 mb-sm-0" v-model="form.end" v-mask="'##/##/####'" placeholder="Final date" required></b-form-input>

        <b-button type="submit" variant="primary">Search</b-button>
      </b-form>
    </div>
    <div class="col-md-12">
      <b-table class="text-nowrap" :fields="fields" :items="purchases" :busy="loading" head-variant="light">
        <template #cell(total)="data">
          {{ data.item.total | formatPrice }}
        </template>
        <template #cell(status)="data">
          <b-badge :variant="classeStatus[data.item.status]">{{ data.item.status | formatStatus }}</b-badge>
        </template>
        <template #table-busy>
          <div class="text-center my-2">
            <b-spinner class="align-middle"></b-spinner>
            <strong>Searching for purchases...</strong>
          </div>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'TablePurchase',
  data () {
    return {
      loading: false,
      form: {
        start: moment().format('DD/MM/YYYY'),
        end: moment().format('DD/MM/YYYY')
      },
      purchases: [],
      fields: [
        'email',
        'total',
        'status'
      ],
      classeStatus: ['danger', 'warning', 'success']
    }
  },
  mounted () {
    console.log(moment().format('DD/MM/YYYY'))
  },
  methods: {
    getPurchasesApi () {
      this.loading = true

      this.$http.post('/purchase-list-period', this.form)
        .then(({ data }) => {
          this.purchases = data.purchase
        })
        .catch(() => {
          this.$swal.fire('Ops!', 'Error fetching purchases', 'error')
        })
        .then(() => {
          this.loading = false
        })
    }
  },
  filters: {
    formatPrice (v) {
      return (v / 100).toFixed(2)
    },
    formatStatus (v) {
      let descriptionStatus = [
        'Pending',
        'Processing',
        'Completed'
      ]

      return descriptionStatus[v]
    }
  }
}
</script>
