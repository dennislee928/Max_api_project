<template>
  <NavBar />
  <div>
    <h1>Ticker</h1>
    <button @click="fetchTicker">Fetch Ticker</button>
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
export default {
  name: 'TickerPage', // 修改這裡
  data() {
    return {
      data: null
    }
  },
  methods: {
    async fetchTicker() {
      const market = 'btctwd'
      const url = new URL('/api/v3/ticker')
      url.searchParams.append('market', market)

      try {
        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        this.data = await response.json()
      } catch (error) {
        console.error('Error fetching ticker:', error)
      }
    }
  }
}
</script>
