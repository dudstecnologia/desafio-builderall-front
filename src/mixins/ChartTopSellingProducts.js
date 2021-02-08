import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  data () {
    return {
      chartData: {
        labels: [],
        datasets: [
          {
            backgroundColor: '#ff6b66',
            data: []
          }
        ]
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        scales: {
          yAxes: [{
              ticks: {
                  min: 0
              }
          }]
        }
      }
    }
  },
  mounted () {
    this.getTopSellingProducts()
  },
  methods: {
    getTopSellingProducts () {
      this.$http.get('/top-selling-products')
        .then(({ data }) => {
          if (data.products) {
            data.products.forEach((p) => {
              this.chartData.labels.push(p.name)
              this.chartData.datasets[0].data.push(p.qt)

              this.renderChart(this.chartData, this.chartOptions)
            })
          }
        })
    }
  }
}
