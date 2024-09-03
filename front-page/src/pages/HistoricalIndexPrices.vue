<template>
  <div>
    <h1>Historical Index Prices</h1>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HistoricalIndexPrices',
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const market = 'btctwd'
      const endTime = Math.floor(Date.now() / 1000)
      const startTime = endTime - 30 * 24 * 60 * 60

      const url = new URL('/api/v3/wallet/m/historical_index_prices')
      url.searchParams.append('market', market)
      url.searchParams.append('start_time', startTime)
      url.searchParams.append('end_time', endTime)

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
</script>
