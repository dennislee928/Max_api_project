import Vue from 'vue';
import Router from 'vue-router';
import IndexPrices from './pages/IndexPrices.vue';
import HistoricalIndexPrices from './pages/HistoricalIndexPrices.vue';
import AvailableLoanAmount from './pages/AvailableLoanAmount.vue';
import InterestRates from './pages/InterestRates.vue';
import Markets from './pages/Markets.vue';
import Currencies from './pages/Currencies.vue';
import ServerTime from './pages/ServerTime.vue';
import KLineData from './pages/KLineData.vue';
import MarketDepth from './pages/MarketDepth.vue';
import RecentTrades from './pages/RecentTrades.vue';
import Tickers from './pages/Tickers.vue';
import Ticker from './pages/Ticker.vue';

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', component: IndexPrices },
    { path: '/historical-index-prices', component: HistoricalIndexPrices },
    { path: '/available-loan-amount', component: AvailableLoanAmount },
    { path: '/interest-rates', component: InterestRates },
    { path: '/markets', component: Markets },
    { path: '/currencies', component: Currencies },
    { path: '/server-time', component: ServerTime },
    { path: '/k-line-data', component: KLineData },
    { path: '/market-depth', component: MarketDepth },
    { path: '/recent-trades', component: RecentTrades },
    { path: '/tickers', component: Tickers },
    { path: '/ticker', component: Ticker },
  ],
});