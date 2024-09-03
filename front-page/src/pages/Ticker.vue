<template>
  <div>
    <h1>Ticker</h1>
    <div>
      <label for="market-select">Select Market:</label>
      <select id="market-select" v-model="selectedMarket" @change="fetchTickerData">
        <option v-for="market in markets" :key="market" :value="market">{{ market }}</option>
      </select>
    </div>
    <div v-if="data">
      <table>
        <thead>
          <tr>
            <th>Market</th>
            <th>Buy</th>
            <th>Buy Volume</th>
            <th>Sell</th>
            <th>Sell Volume</th>
            <th>Open</th>
            <th>Low</th>
            <th>High</th>
            <th>Last</th>
            <th>Volume</th>
            <th>Volume in BTC</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{{ data.market }}</td>
            <td>{{ data.buy }}</td>
            <td>{{ data.buy_vol }}</td>
            <td>{{ data.sell }}</td>
            <td>{{ data.sell_vol }}</td>
            <td>{{ data.open }}</td>
            <td>{{ data.low }}</td>
            <td>{{ data.high }}</td>
            <td>{{ data.last }}</td>
            <td>{{ data.vol }}</td>
            <td>{{ data.vol_in_btc }}</td>
            <td>{{ new Date(data.at * 1000).toLocaleString() }}</td>
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
  name: 'TickerPage', // 修改這裡
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
    async fetchTickerData() {
      try {
        const url = new URL('/api/v3/ticker', window.location.origin)
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
    await this.fetchTickerData()
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
