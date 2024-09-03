<template>
  <NavBar />
  <div>
    <h1>Currencies</h1>
    <div v-if="data">
      <table>
        <thead>
          <tr>
            <th>Currency</th>
            <th>Type</th>
            <th>Precision</th>
            <th>M Wallet Supported</th>
            <th>M Wallet Mortgageable</th>
            <th>M Wallet Borrowable</th>
            <th>Min Borrow Amount</th>
            <th>Networks</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="currency in data" :key="currency.currency">
            <td>{{ currency.currency }}</td>
            <td>{{ currency.type }}</td>
            <td>{{ currency.precision }}</td>
            <td>{{ currency.m_wallet_supported ? 'Yes' : 'No' }}</td>
            <td>{{ currency.m_wallet_mortgageable ? 'Yes' : 'No' }}</td>
            <td>{{ currency.m_wallet_borrowable ? 'Yes' : 'No' }}</td>
            <td>{{ currency.min_borrow_amount || 'N/A' }}</td>
            <td>
              <ul>
                <li v-for="network in currency.networks" :key="network.id">
                  {{ network.id }} ({{ network.network_protocol }})
                </li>
              </ul>
            </td>
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
  name: 'CurrenciesPage', // 修改這裡
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const response = await fetch('/api/v3/currencies')
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      this.data = await response.json()
    } catch (error) {
      console.error('Error fetching data:', error)
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 5px 0;
}
</style>
