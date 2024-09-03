<template>
    <div>
      <h1>K Line Data</h1>
      <button @click="fetchKLineData">Fetch K Line Data</button>
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
      async fetchKLineData() {
        const market = 'btctwd';
        const limit = 30;
        const period = 1;
        const url = new URL('https://max-api.maicoin.com/api/v3/k');
        url.searchParams.append('market', market);
        url.searchParams.append('limit', limit);
        url.searchParams.append('period', period);
  
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching K line data:', error);
        }
      },
    },
  };
  </script>