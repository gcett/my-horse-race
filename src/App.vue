<script setup>

import HorseList from './components/HorseList.vue'
import RaceTrack from './components/RaceTrack.vue'
import RaceInfo from './components/RaceInfo.vue'
</script>

<template>
  <div class="page">
    <aside class="sidebar">
      <HorseList />
    </aside>

    <main class="main-content">
      <div class="track">
        <RaceTrack />
      </div>
      <div class="info">
        <RaceInfo />
      </div>
    </main>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow-x: hidden;
  background: #f5f5f5;
}


.sidebar {
  width: 240px;
  background: white;
  border-right: 1px solid #ccc;
  padding: 0;         /* 🔥 padding sağa kaydırıyordu */
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;  /* içeriği sola sabitle */
  justify-content: flex-start;
  box-sizing: border-box;
  overflow-y: auto;
}

.main-content {
  display: flex;
  flex-direction: row;
  flex: 1;
  width: 100%;
  min-width: 0;
  overflow-x: hidden;
}
.track {
  flex: 2;
  background: white;
  padding: 40px;
  border-radius: 8px;
  overflow: auto;
  min-width: 0;
}

.info {
  flex: 1;
  background: white;
  padding: 16px;
  border-radius: 8px;
  overflow: auto;
  min-width: 0;
}


</style>