<template>
  <NavBar />
  <div>
    <h1>Markets</h1>
    <div v-if="data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Status</th>
            <th>Base Unit</th>
            <th>Base Unit Precision</th>
            <th>Min Base Amount</th>
            <th>Quote Unit</th>
            <th>Quote Unit Precision</th>
            <th>Min Quote Amount</th>
            <th>M Wallet Supported</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="market in data" :key="market.id">
            <td>{{ market.id }}</td>
            <td>{{ market.status }}</td>
            <td>{{ market.base_unit }}</td>
            <td>{{ market.base_unit_precision }}</td>
            <td>{{ market.min_base_amount }}</td>
            <td>{{ market.quote_unit }}</td>
            <td>{{ market.quote_unit_precision }}</td>
            <td>{{ market.min_quote_amount }}</td>
            <td>{{ market.m_wallet_supported ? 'Yes' : 'No' }}</td>
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
  name: 'MarketsPage',
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const response = await fetch('/api/v3/markets')
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
        const url = new URL('/api/v3/depth', apiBaseUrl)
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
