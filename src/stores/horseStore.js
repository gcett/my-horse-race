const horseNames = [
    'Lightning', 'Thunder', 'Blaze', 'Shadow', 'Comet',
    'Storm', 'Tornado', 'Rocket', 'Phantom', 'Blizzard',
    'Ghost', 'Firefly', 'Steel', 'Venom', 'Falcon',
    'Wolf', 'Ranger', 'Bolt', 'Ace', 'Zeus'
]

const horseColors = [
    '#abb134', '#33FF57', '#3357FF', '#6e4538', '#EF711B',
    '#034f68', '#c1cdc1', '#327003', '#d80000', '#B015EF',
    '#7a2de4', '#319dfa', '#fbc000', '#aa98b8', '#8EC6EF',
    '#eb3cf4', '#38edf6', '#494950', '#e37474', '#7FFFD4FF'
]

const raceDistances = [1200, 1400, 1600, 1800, 2000, 2200];

import { defineStore } from 'pinia'

export const useHorseStore = defineStore('horse', {
    state: () => ({
        horses: horseNames.map((name, i) => ({
            id: i + 1,
            name,
            color: horseColors[i],
            condition: 100 - i * 5
        })),
        isRunning: false,
        raceSchedule: [],
        raceResults: [],
        currentRoundIndex:0,
        conditionUpdateReady: false,
    }),


    getters: {
        totalHorses: (state) => state.horses.length
    },

    actions: {
        setRaceResults(results) {
            this.raceResults = results;
        },

        resetRace() {
            this.isRunning = false;
            this.raceSchedule = [];
            this.raceResults = [];
        },

        generateRaceSchedule() {
            if (this.isRunning) return;
            if (this.conditionUpdateReady) {
                this.horses = this.horses.map(horse => ({
                    ...horse,
                    condition: Math.floor(Math.random() * 101)
                }));
                this.conditionUpdateReady = false; // ✅ Bir kere kullanıldıktan sonra kapat
            }

            const schedule = [];
            for (let i = 0; i < 6; i++) {
                const shuffled = [...this.horses].sort(() => 0.5 - Math.random());
                const selected = shuffled.slice(0, 10);
                schedule.push({
                    round: i + 1,
                    distance: raceDistances[i],
                    horses: selected
                });
            }

            this.raceSchedule = schedule;
            this.raceResults = [];
        },

        startRace() {
            this.isRunning = true;

        },

        finishRace() {
            this.isRunning = false;
            this.conditionUpdateReady = true; // ✅ Bayrağı kaldır
        }
    }
});