<template>
    <div>
      <h1>Index Prices</h1>
      <button @click="fetchIndexPrices">Fetch Index Prices</button>
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
      async fetchIndexPrices() {
        try {
          const response = await fetch('https://max-api.maicoin.com/api/v3/wallet/m/index_prices');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching index prices:', error);
        }
      },
    },
  };
  </script>