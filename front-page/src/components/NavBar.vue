<template>
  <div class="nav-bar">
    <ul>
      <li><router-link to="/">Index Prices</router-link></li>
      <li><router-link to="/markets">Markets</router-link></li>
      <li><router-link to="/historical-index-prices">Historical Index Prices</router-link></li>
      <li><router-link to="/available-loan-amount">Available Loan Amount</router-link></li>
      <li><router-link to="/interest-rates">Interest Rates</router-link></li>
      <li><router-link to="/currencies">Currencies</router-link></li>

      <li><router-link to="/k-line-data">K Line Data</router-link></li>
      <li><router-link to="/market-depth">Market Depth</router-link></li>
      <li><router-link to="/recent-trades">Recent Trades</router-link></li>

      <li><router-link to="/ticker">Ticker</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style>
.nav-bar {
  width: 200px;
  float: left;
}

.nav-bar ul {
  list-style-type: none;
  padding: 0;
}

.nav-bar li {
  margin: 10px 0;
}
</style>
