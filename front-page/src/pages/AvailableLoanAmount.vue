<template>
  <NavBar />
  <div>
    <h1>Available Loan Amount</h1>
    <div v-if="data">
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(amount, currency) in data" :key="currency">
            <td>{{ currency.toUpperCase() }}</td>
            <td>{{ amount }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AvailableLoanAmount',
  data() {
    return {
      data: null
    }
  },
  methods: {
    async fetchLoanAmount() {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://max-api.maicoin.com'
        const url = new URL('/api/v3/wallet/m/limits', apiBaseUrl)

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        this.data = await response.json()
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
  },
  async mounted() {
    await this.fetchLoanAmount()
    this.interval = setInterval(this.fetchLoanAmount, 5000)
  },
  beforeUnmount() {
    clearInterval(this.interval)
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:nth-child(even) {
  background-color: #f9f9f9;
}

tr:hover {
  background-color: #f1f1f1;
}
</style>
