<template>
    <div>
      <h1>Market Depth</h1>
      <button @click="fetchMarketDepth">Fetch Market Depth</button>
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
      async fetchMarketDepth() {
        const market = 'btctwd';
        const limit = 300;
        const sortByPrice = true;
        const url = new URL('/api/v3/depth');
        url.searchParams.append('market', market);
        url.searchParams.append('limit', limit);
        url.searchParams.append('sort_by_price', sortByPrice);
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching market depth:', error);
        }
      },
    },
  };
  </script>