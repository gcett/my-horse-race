<script setup>
import { useHorseStore } from '../stores/horseStore'
const horseStore = useHorseStore()

function generateProgram() {
  if (horseStore.isRunning) return
  horseStore.resetRace()
  horseStore.generateRaceSchedule()
}
</script>

<template>
  <div class="program-panel">
    <div class="generate-sticky">
      <button
          @click="generateProgram"
          class="generate-btn"
          :disabled="horseStore.isRunning"
      >
        Generate Program
      </button>
    </div>

    <h2>📋 Race Program</h2>

    <div v-if="horseStore.raceSchedule.length">
      <div
          class="lap-block"
          v-for="(round, index) in horseStore.raceSchedule"
          :key="index"
      >
        <h3 class="lap-header">{{ index + 1 }}. Lap – {{ round.distance }}m</h3>

        <div class="lap-headings" v-if="horseStore.raceResults[index]">
          <h4 class="lap-subtitle">📋 Race Program</h4>
          <h4 class="lap-subtitle">🏁 Race Result</h4>
        </div>

        <div class="lap-row">
          <!-- Program -->
          <div class="program-card">
            <table class="program-table">
              <thead>
              <tr><th>Position</th><th>Name</th></tr>
              </thead>
              <tbody>
              <tr v-for="(horse, i) in round.horses" :key="horse.id">
                <td>{{ i + 1 }}</td>
                <td>{{ horse.name }}</td>
              </tr>
              </tbody>
            </table>
          </div>

          <!-- Result -->
          <div class="result-card">
            <template v-if="horseStore.raceResults[index] && !horseStore.isRunning">
              <table class="results-table">
                <thead>
                <tr><th>Position</th><th>Name</th></tr>
                </thead>
                <tbody>
                <tr v-for="(horse, i) in horseStore.raceResults[index].horses" :key="horse.id">
                  <td>{{ i + 1 }}</td>
                  <td>{{ horse.name }}</td>
                </tr>
                </tbody>
              </table>
            </template>
            <template v-else>
              <p class="no-result-msg">Race results will appear after the race 🏁</p>
            </template>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="no-program">No program generated yet.</p>
  </div>
</template>

<style scoped>
.generate-btn {
  align-self: flex-start;
  padding: 10px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 14px;
}

.program-panel {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.generate-sticky {
  position: sticky;
  top: -25px;
  background-color: white;
  padding: 18px 100px;
  z-index: 5;
  border-bottom: 1px solid rgba(255, 255, 255, 0);
}

.lap-block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.lap-headings {
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  margin-bottom: 4px;
}

.lap-subtitle {
  font-size: 16px;
  font-weight: bold;
  color: #333;
}

.lap-header {
  background-color: #a30000;
  color: white;
  padding: 6px 12px;
  border-radius: 4px;
  font-weight: bold;
}

.lap-row {
  display: flex;
  flex-direction: row;
  gap: 16px;
  justify-content: space-between;
  flex-wrap: nowrap;
}

.program-card,
.result-card {
  flex: 1;
  background: white;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

.no-result-msg {
  font-style: italic;
  color: #888;
  text-align: center;
  padding: 12px;
}

.program-table,
.results-table {
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
}

.program-table th,
.program-table td,
.results-table th,
.results-table td {
  padding: 6px;
  font-size: 14px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}
</style>