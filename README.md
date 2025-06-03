# 🐎 Horse Racing Simulator – Vue 3 + Vite 

This is a web-based horse racing simulation application built in Vue 3, Vite, and Pinia.
Users can design race programs, start the race, and track each horse step by step lap for lap in real-time animation. Each lap result is tracked and displayed separately.---
---
## Purpose

The main goal of this project is to simulate a dynamic and visual horse racing experience, helping users observe randomized race outcomes based on horse conditions

---


## Features

- 20 uniquely colored and named horses
- Condition-based movement per lap
- Dynamic program generation
- Animated race tracking on each lap
- Separate results panel for each lap
- Slight delay at the start of each lap for visual clarity
- Random condition adjustments after each race for variability

---
## Screen Structure & Interface Layout

- **Left Panel (Horse List):** Names, condition values, colors
- **Center Panel (Race Track):** Animated race progress, Start button
- **Right Panel (Race Program / Results):** Lap distance, programming per lap, Generated Program Button

-----

## Button Interactions

### 🟦 Generate Program
- Generates a new randomized race program with 10 randomly selected horses
- Initializes each horse's **condition** value
- Once clicked, horse condition values are slightly randomized for variation
- This button must be clicked **before** starting a new race

### 🟩 Start Race
- Begins the race based on the current program
- Horses move lap by lap, based on their condition value
- Animations show horses progressing across the track
- Each lap result is recorded and shown on the **Race Result** panel

### 🔁 Race Progression
- Horses move from **0% to 100%** per lap with visible delay
- “Each lap is visually presented and can be followed by the user.”
- After the final lap, overall race result becomes visible

> ⚠️ To simulate a new race, press **Generate Program** again to reset conditions.

-----------
## Future Improvements

- **Results History Page**:  
  Add a dedicated page or component to store and display the last 5 race results for review.

-  **Horse Win Rate Graphs**:  
  Calculate and display win-rate statistics for each horse based on recent races.

-  **Sound Effects**:  
  Add background music and audio feedback during the race to enhance user experience.
---

## Setup Instructions

```bash
# Clone the project
git clone https://github.com/your-username/my-horse-race.git
cd my-horse-race

# Install dependencies
npm install

# Run the development server
npm run dev

# Build for production (optional, for deployment)
npm run build

