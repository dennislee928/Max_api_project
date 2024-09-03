<template>
    <div>
      <h1>Available Loan Amount</h1>
      <button @click="fetchAvailableLoanAmount">Fetch Available Loan Amount</button>
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
      async fetchAvailableLoanAmount() {
        try {
          const response = await fetch('/api/v3/wallet/m/limits');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching available loan amount:', error);
        }
      },
    },
  };
  </script>