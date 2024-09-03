<template>
  <div>
    <h1>Recent Trades</h1>
    <div>
      <label for="market-select">Select Market:</label>
      <select id="market-select" v-model="selectedMarket" @change="fetchRecentTrades">
        <option v-for="market in markets" :key="market" :value="market">{{ market }}</option>
      </select>
    </div>
    <div v-if="data">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Price</th>
            <th>Volume</th>
            <th>Funds</th>
            <th>Market</th>
            <th>Side</th>
            <th>Created At</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="trade in data" :key="trade.id">
            <td>{{ trade.id }}</td>
            <td>{{ trade.price }}</td>
            <td>{{ trade.volume }}</td>
            <td>{{ trade.funds }}</td>
            <td>{{ trade.market }}</td>
            <td>{{ trade.side }}</td>
            <td>{{ new Date(trade.created_at).toLocaleString() }}</td>
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
  name: 'RecentTradesComponent',
  data() {
    return {
      selectedMarket: 'btctwd',
      data: null,
      markets: [
        'btctwd',
        'ethtwd',
        'ltctwd',
        'bchtwd',
        'usdttwd',
        'ethbtc',
        'btcusdt',
        'ethusdt',
        'bchusdt',
        'ltcusdt',
        'xrptwd',
        'xrpusdt',
        'maxusdt',
        'maxtwd',
        'bcnttwd',
        'bcntusdt',
        'usdctwd',
        'linktwd',
        'comptwd',
        'sandusdt',
        'usdcusdt',
        'linkusdt',
        'grttwd',
        'grtusdt',
        'yfitwd',
        'yfiusdt',
        'dogetwd',
        'dogeusdt',
        'adatwd',
        'dottwd',
        'matictwd',
        'compusdt',
        'dotusdt',
        'maticusdt',
        'adausdt',
        'soltwd',
        'solusdt',
        'shibtwd',
        'shibusdt',
        'sandtwd',
        'galatwd',
        'galausdt',
        'manatwd',
        'manausdt',
        'alicetwd',
        'aliceusdt',
        'lookstwd',
        'rlytwd',
        'loottwd',
        'masktwd',
        'lootusdt',
        'maskusdt',
        'apetwd',
        'apeusdt',
        'rlyusdt',
        'xtztwd',
        'xtzusdt',
        'gmttwd',
        'gmtusdt',
        'gsttwd',
        'gstusdt',
        'bnbtwd',
        'bnbusdt',
        'enstwd',
        'ensusdt',
        'etctwd',
        'etcusdt',
        'arbtwd',
        'arbusdt',
        'tontwd',
        'tonusdt',
        'avaxtwd',
        'avaxusdt'
      ]
    }
  },
  methods: {
    async fetchRecentTrades() {
      try {
        const url = new URL(
          'https://cors-anywhere.herokuapp.com/https://max-api.maicoin.com/api/v3/trades'
        )
        url.searchParams.append('market', this.selectedMarket)

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
    await this.fetchRecentTrades()
  }
}
</script>

<style scoped>
select {
  margin-bottom: 20px;
  padding: 5px;
  font-size: 16px;
}

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
