<template>
  <div>
    <h1>Index Prices</h1>
    <div v-if="data">
      <table class="response-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(price, currency) in data" :key="currency">
            <td>{{ currency }}</td>
            <td>{{ price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPrices',
  data() {
    return {
      data: null,
      intervalId: null
    }
  },
  async mounted() {
    this.fetchData()
    this.intervalId = setInterval(this.fetchData, 5000)
  },
  beforeUnmount() {
    clearInterval(this.intervalId)
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('/api/v3/wallet/m/index_prices')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        this.data = await response.json()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  }
}
</script>

<style scoped>
.response-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  text-align: left;
}

.response-table th,
.response-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.response-table thead {
  background-color: #f2f2f2;
}

.response-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.response-table tbody tr:hover {
  background-color: #f1f1f1;
}
</style>
