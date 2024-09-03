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
  async created() {
    try {
      const response = await fetch('/api/v3/wallet/m/historical_index_prices')
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
