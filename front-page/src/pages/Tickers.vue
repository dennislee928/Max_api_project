<template>
  <NavBar />
  <div>
    <h1>Tickers</h1>
    <div>
      <label for="market">Market:</label>
      <select v-model="market" id="market">
        <option v-for="option in marketOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
    <div v-if="data">
      <table class="response-table">
        <thead>
          <tr>
            <th>Market</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(price, market) in data" :key="market">
            <td>{{ market }}</td>
            <td>{{ price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TickersPage',
  data() {
    return {
      data: null,
      market: 'btctwd',
      marketOptions: [
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
  computed: {
    formattedData() {
      return JSON.stringify(this.data, null, 2)
    }
  },
  watch: {
    market: 'fetchData'
  },
  async mounted() {
    this.fetchData()
  },
  methods: {
    async fetchData() {
      try {
        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://max-api.maicoin.com'
        const url = new URL('/api/v3/tickers', apiBaseUrl)
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
