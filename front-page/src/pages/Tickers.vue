<template>
    <div>
      <h1>Tickers</h1>
      <button @click="fetchTickers">Fetch Tickers</button>
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
      async fetchTickers() {
        const markets = ['btctwd', 'ethtwd'];
        const url = new URL('https://max-api.maicoin.com/api/v3/tickers');
        markets.forEach(market => url.searchParams.append('markets', market));
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching tickers:', error);
        }
      },
    },
  };
  </script>