<template>
  <NavBar />
  <div>
    <h1>Interest Rates</h1>
    <div v-if="data">
      <table class="interest-rates-table">
        <thead>
          <tr>
            <th>Currency</th>
            <th>Hourly Interest Rate</th>
            <th>Next Hourly Interest Rate</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(rates, currency) in data" :key="currency">
            <td>{{ currency.toUpperCase() }}</td>
            <td>{{ rates.hourly_interest_rate }}</td>
            <td>{{ rates.next_hourly_interest_rate }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InterestRates',
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const response = await fetch('/api/v3/wallet/m/interest_rates')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      this.data = await response.json()
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  },
  methods: {
    async fetchData() {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://max-api.maicoin.com'
        const url = new URL('/api/v3/wallet/m/interest_rates', apiBaseUrl)
        const response = await fetch(url)
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
.interest-rates-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1em;
  text-align: left;
}

.interest-rates-table th,
.interest-rates-table td {
  padding: 12px 15px;
  border: 1px solid #ddd;
}

.interest-rates-table thead {
  background-color: #f2f2f2;
}

.interest-rates-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.interest-rates-table tbody tr:hover {
  background-color: #f1f1f1;
}
</style>
