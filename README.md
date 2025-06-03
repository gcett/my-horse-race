# 🐎 Horse Racing Simulator – Vue 3 + Vite 

This is a web-based horse racing simulation application built in Vue 3, Vite, and Pinia.
Users can design race programs, start the race, and track each horse step by step lap for lap in real-time animation. Each lap result is tracked and displayed separately.
---
## Purpose

The main goal of this project is to develop a dynamic and graphical horse racing simulation, in which users can visualize randomized race outcomes depending on the conditions of horses

---


## Features

- 20 uniquely colored and named horses
- Condition-based movement per lap
- Dynamic program generation
- Animated tracking of the race per lap
- Results panel for each lap
- Short delay at the start of each lap for visualization
- Random condition change after each race for variety

---
## Screen Structure & Interface Layout

- **Left Panel (Horse List):** Names, condition values, colors
- **Center Panel (Race Track):** Animated race progress, Start button
- **Right Panel (Race Program / Results):** Lap distance, programming per lap, Generated Program Button

-----

## Button Interactions

### 🟦 Generate Program
- Generates a new randomised race program with 10 randomly selected horses
- Resets each horse's **condition** value
- Horse condition values are randomized slightly for variation when clicked
- This button must be clicked **before** starting a new race

### 🟩 Start Race
- Starts the race based on the current program
- Horses race lap by lap, based on the condition value of each horse
- Animations show horses running along the track
- The result of each lap is recorded and shown on the **Race Result** panel

### 🔁 Race Progression
- Horses move from **0% to 100%** per lap with visible delay
- "Each lap is visually presented and can be followed by the user."
- After the final lap, complete race result shows
> ⚠️ To create a new race, click **Generate Program** again to reset conditions.

-----------
## Future Improvements

- **Results History Page**:  
  Add a dedicated page or component to store and display the last 5 race results for review.

-  **Horse Win Rate Graphs**:  
  Calculate and display win-rate statistics for each horse based on recent races.

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

