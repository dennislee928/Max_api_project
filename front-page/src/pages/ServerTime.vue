<template>
    <div>
      <h1>Server Time</h1>
      <button @click="fetchServerTime">Fetch Server Time</button>
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
      async fetchServerTime() {
        try {
          const response = await fetch('/api/v3/timestamp');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          this.data = await response.json();
        } catch (error) {
          console.error('Error fetching server time:', error);
        }
      },
    },
  };
  </script>