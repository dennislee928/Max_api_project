<template>
    <div>
      <h1>Historical Index Prices</h1>
      <button @click="fetchHistoricalIndexPrices">Fetch Historical Index Prices</button>
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
      async fetchHistoricalIndexPrices() {
        const market = 'btctwd';
        const startTime = 1512950400000;
        const endTime = 1513555200000;
        const url = new URL('https://max-api.maicoin.com/api/v3/wallet/m/historical_index_prices');
        url.searchParams.append('market', market);
        url.searchParams.append('start_time', startTime);
        url.searchParams.append('end_time', endTime);
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching historical index prices:', error);
        }
      },
    },
  };
  </script>