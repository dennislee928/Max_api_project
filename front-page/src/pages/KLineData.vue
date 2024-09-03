<template>
  <NavBar />
  <div>
    <h1>K Line Data</h1>
    <div>
      <label for="market">Market:</label>
      <select v-model="market" id="market">
        <option v-for="option in marketOptions" :key="option" :value="option">{{ option }}</option>
      </select>
    </div>
    <div>
      <label for="interval">Interval:</label>
      <select v-model="interval" id="interval">
        <option v-for="option in intervalOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
    <div>
      <label for="startTime">Start Time:</label>
      <input type="datetime-local" v-model="startTime" id="startTime" />
    </div>
    <div>
      <label for="endTime">End Time:</label>
      <input type="datetime-local" v-model="endTime" id="endTime" />
    </div>
    <button @click="fetchData">Fetch Data</button>
    <div v-if="data">
      <pre>{{ formattedData }}</pre>
      <canvas id="klineChart"></canvas>
    </div>
  </div>
</template>

<script>
import { Chart } from 'chart.js'

export default {
  name: 'KLineData',
  data() {
    return {
      data: null,
      market: 'btctwd',
      interval: 1,
      startTime: '',
      endTime: '',
      marketOptions: [
        'btctwd',
        'ethtwd',
        'ltctwd',
        'bchtwd',
        'usdttwd',
        'ethbtc',
        'btcusdt',
        'ethusdt',
        'bchusdt',
        'ltcusdt',
        'xrptwd',
        'xrpusdt',
        'maxusdt',
        'maxtwd',
        'bcnttwd',
        'bcntusdt',
        'usdctwd',
        'linktwd',
        'comptwd',
        'sandusdt',
        'usdcusdt',
        'linkusdt',
        'grttwd',
        'grtusdt',
        'yfitwd',
        'yfiusdt',
        'dogetwd',
        'dogeusdt',
        'adatwd',
        'dottwd',
        'matictwd',
        'compusdt',
        'dotusdt',
        'maticusdt',
        'adausdt',
        'soltwd',
        'solusdt',
        'shibtwd',
        'shibusdt',
        'sandtwd',
        'galatwd',
        'galausdt',
        'manatwd',
        'manausdt',
        'alicetwd',
        'aliceusdt',
        'lookstwd',
        'rlytwd',
        'loottwd',
        'masktwd',
        'lootusdt',
        'maskusdt',
        'apetwd',
        'apeusdt',
        'rlyusdt',
        'xtztwd',
        'xtzusdt',
        'gmttwd',
        'gmtusdt',
        'gsttwd',
        'gstusdt',
        'bnbtwd',
        'bnbusdt',
        'enstwd',
        'ensusdt',
        'etctwd',
        'etcusdt',
        'arbtwd',
        'arbusdt',
        'tontwd',
        'tonusdt',
        'avaxtwd',
        'avaxusdt'
      ],
      intervalOptions: [1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080]
    }
  },
  computed: {
    formattedData() {
      return JSON.stringify(this.data, null, 2)
    }
  },
  methods: {
    async fetchData() {
      try {
        const startTime = Math.floor(new Date(this.startTime).getTime() / 1000)
        const endTime = Math.floor(new Date(this.endTime).getTime() / 1000)

        const url = new URL('/api/v3/k', window.location.origin)
        url.searchParams.append('market', this.market)
        url.searchParams.append('interval', this.interval)
        url.searchParams.append('start_time', startTime)
        url.searchParams.append('end_time', endTime)

        const response = await fetch(url)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        this.data = await response.json()
        this.$nextTick(() => {
          this.renderChart()
        })
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    },
    renderChart() {
      const ctx = document.getElementById('klineChart').getContext('2d')
      const labels = this.data.map((item) => new Date(item[0] * 1000).toLocaleString())
      const data = {
        labels: labels,
        datasets: [
          {
            label: 'K Line Data',
            data: this.data.map((item) => ({
              x: new Date(item[0] * 1000),
              y: item[1]
            })),
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
            lineTension: 0.1
          }
        ]
      }
      new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'minute'
              }
            }
          }
        }
      })
    }
  }
}
</script>

<style scoped>
pre {
  background-color: #f8f8f8;
  padding: 10px;
  border-radius: 5px;
  overflow-x: auto;
}
</style>
