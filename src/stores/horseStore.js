import { defineStore } from 'pinia'

export const useHorseStore = defineStore('horse', {
    state: () => ({
        horses: [
            { id: 1, name: 'isa2', condition: 73 },
            { id: 2, name: 'burak', condition: 32 },
            { id: 3, name: 'isa', condition: 45 }
        ]
    }),
    getters: {
        totalHorses: (state) => state.horses.length
    }
})