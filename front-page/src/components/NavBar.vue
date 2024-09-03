<template>
  <div :class="['nav-bar', { collapsed: isCollapsed }]">
    <button @click="toggleNavBar" class="toggle-button">
      <span v-if="isCollapsed">☰</span>
      <span v-else>✖</span>
    </button>
    <ul v-show="!isCollapsed">
      <li><router-link to="/">Index Prices</router-link></li>
      <li><router-link to="/markets">Markets</router-link></li>

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
  name: 'NavBar',
  data() {
    return {
      isCollapsed: true
    }
  },
  methods: {
    toggleNavBar() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
</script>

<style>
.nav-bar {
  width: 200px;
  float: right;
  transition: width 0.3s;
}

.nav-bar.collapsed {
  width: 50px;
}

.nav-bar ul {
  list-style-type: none;
  padding: 0;
}

.nav-bar li {
  margin: 10px 0;
}

.toggle-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
