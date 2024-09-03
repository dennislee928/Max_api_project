<template>
  <div
    class="min-h-screen bg-gradient-to-r from-purple-600 to-blue-600 text-white flex flex-col items-center"
  >
    <h1 class="text-5xl font-extrabold mt-10">K Line Data</h1>
    <div class="w-full max-w-4xl mt-10 p-6 bg-gray-900 bg-opacity-75 rounded-lg shadow-lg">
      <div class="mb-4">
        <label for="market" class="block text-lg">Market:</label>
        <select v-model="market" id="market" class="w-full p-2 bg-gray-800 text-white rounded">
          <option v-for="option in marketOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="interval" class="block text-lg">Interval:</label>
        <select v-model="interval" id="interval" class="w-full p-2 bg-gray-800 text-white rounded">
          <option v-for="option in intervalOptions" :key="option" :value="option">
            {{ option }}
          </option>
        </select>
      </div>
      <div class="mb-4">
        <label for="startTime" class="block text-lg">Start Time:</label>
        <div class="block">
          <el-date-picker
            v-model="startTime"
            type="datetime"
            placeholder="Select date and time"
            :shortcuts="shortcuts"
            class="w-full"
          />
        </div>
      </div>
      <div class="mb-4">
        <label for="endTime" class="block text-lg">End Time:</label>
        <div class="block">
          <el-date-picker
            v-model="endTime"
            type="datetime"
            placeholder="Select date and time"
            :shortcuts="shortcuts"
            class="w-full"
          />
        </div>
      </div>
      <button
        @click="fetchData"
        class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-2 px-4 rounded-full transition duration-300"
      >
        Fetch Data
      </button>
      <div v-if="data" class="mt-10 w-full">
        <pre class="bg-gray-800 p-4 rounded">{{ formattedData }}</pre>
        <canvas id="klineChart" class="mt-4"></canvas>
      </div>
    </div>
    <div v-if="!data" class="mt-10 text-xl">Loading...</div>
  </div>
</template>

<script>
import { Chart } from 'chart.js'
import { ElDatePicker } from 'element-plus'

export default {
  name: 'KLineData',
  components: {
    ElDatePicker
  },
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
        'xrptwd' // 添加更多市場選項
      ],
      intervalOptions: [1, 5, 15, 30, 60, 120, 240, 360, 720, 1440, 4320, 10080],
      shortcuts: [
        {
          text: 'Last 1 hour',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000)
            return [start, end]
          }
        },
        {
          text: 'Last 24 hours',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24)
            return [start, end]
          }
        },
        {
          text: 'Last 7 days',
          value: () => {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            return [start, end]
          }
        }
      ]
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

        const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'https://max-api.maicoin.com'
        const url = new URL(
          `/api/v3/k?market=${this.market}&interval=${this.interval}&start_time=${startTime}&end_time=${endTime}`,
          apiBaseUrl
        )

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
/* Tailwind CSS will handle most of the styling */
</style>
