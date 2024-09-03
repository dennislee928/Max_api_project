<template>
    <div>
      <h1>Recent Trades</h1>
      <button @click="fetchRecentTrades">Fetch Recent Trades</button>
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
      async fetchRecentTrades() {
        const market = 'btctwd';
        const limit = 50;
        const url = new URL('https://max-api.maicoin.com/api/v3/trades');
        url.searchParams.append('market', market);
        url.searchParams.append('limit', limit);
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching recent trades:', error);
        }
      },
    },
  };
  </script>