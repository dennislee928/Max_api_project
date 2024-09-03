<template>
    <div>
      <h1>Interest Rates</h1>
      <button @click="fetchInterestRates">Fetch Interest Rates</button>
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
      async fetchInterestRates() {
        try {
          const response = await fetch('/api/v3/wallet/m/interest_rates');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching interest rates:', error);
        }
      },
    },
  };
  </script>