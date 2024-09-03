<template>
  <NavBar />
  <div>
    <h1>Market Depth</h1>
    <div>
      <label for="market-select">Select Market:</label>
      <select id="market-select" v-model="selectedMarket" @change="fetchMarketDepth">
        <option v-for="market in markets" :key="market" :value="market">{{ market }}</option>
      </select>
    </div>
    <div v-if="data">
      <div class="market-depth">
        <div class="asks">
          <h2>Asks</h2>
          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="ask in data.asks" :key="ask[0]">
                <td>{{ ask[0] }}</td>
                <td>{{ ask[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="bids">
          <h2>Bids</h2>
          <table>
            <thead>
              <tr>
                <th>Price</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="bid in data.bids" :key="bid[0]">
                <td>{{ bid[0] }}</td>
                <td>{{ bid[1] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarketDepthComponent',
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
    async fetchMarketDepth() {
      try {
        const url = `https://cors-anywhere.herokuapp.com/https://max-api.maicoin.com/api/v3/depth?market=${this.selectedMarket}`
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
    await this.fetchMarketDepth()
  }
}
</script>

<style scoped>
.market-depth {
  display: flex;
  justify-content: space-between;
}

.asks,
.bids {
  width: 48%;
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
