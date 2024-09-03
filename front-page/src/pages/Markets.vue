<template>
    <div>
      <h1>Markets</h1>
      <button @click="fetchMarkets">Fetch Markets</button>
      <pre>{{ data }}</pre>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: null,
      };
    },
    methods: {
      async fetchMarkets() {
        try {
          const response = await fetch('/api/v3/markets');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching markets:', error);
        }
      },
    },
  };
  </script>