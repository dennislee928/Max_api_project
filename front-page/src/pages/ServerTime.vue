<template>
  <NavBar />
  <div>
    <h1>Server Time</h1>
    <div v-if="data">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ServerTime',
  data() {
    return {
      data: null
    }
  },
  async mounted() {
    try {
      const response = await fetch('/api/v3/time')
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
