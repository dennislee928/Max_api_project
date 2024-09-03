<template>
  <div>
    <h1>Index Prices</h1>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
    <div v-if="!data" class="mt-10 text-xl">Loading...</div>
  </div>
</template>

<script>
export default {
  name: 'IndexPricesComponent',
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const response = await fetch(
        'https://maxproxy.pcleegood.workers.dev/api/v3/wallet/m/index_prices'
      )
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
        const url = 'https://maxproxy.pcleegood.workers.dev/api/v3/wallet/m/index_prices'
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
