<script setup>
import { useHorseStore } from './stores/horseStore'

const horseStore = useHorseStore()
</script>

<template>
  <h1>Horse List ({{ horseStore.totalHorses }})</h1>
  <ul>
    <li v-for="horse in horseStore.horses" :key="horse.id">
      🐎 {{ horse.name }} (Condition: {{ horse.condition }})
    </li>
  </ul>
</template>