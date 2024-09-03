<template>
    <div>
      <h1>Currencies</h1>
      <button @click="fetchCurrencies">Fetch Currencies</button>
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
      async fetchCurrencies() {
        try {
          const response = await fetch('/api/v3/currencies');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching currencies:', error);
        }
      },
    },
  };
  </script>