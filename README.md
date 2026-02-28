# Bubble Sort Visualizer

A dynamic, interactive Bubble Sort visualization built with **React** and **Vite**. Watch the algorithm sort an array in real time with color-coded animations, live statistics, and a step-by-step operations log. Built as a CV portfolio project to demonstrate React development skills.

---

## Preview

The application opens in the browser with an animated bar chart, live pass/comparison/swap counters, speed controls, and an operations log.

---

## Features

- Start — begins sorting the current array
- New Array — generates a new random array and resets
- Speed control — Slow / Normal / Fast
- Color-coded bars — Default / Comparing / Swapping / Sorted
- Live statistics — Pass, Comparisons, Swaps counters
- Big O Complexity display — Worst / Average / Best case
- Operations log — step-by-step swap history
- Early stop — detects when array is already sorted
- Glow effect — visual feedback when sorting completes

---

## Technologies

| Technology | Usage |
|------------|-------|
| React 18 | UI framework |
| Vite 5 | Build tool and dev server |
| JavaScript (ES6+) | Core logic |
| CSS-in-JS | Inline styles and global style tag |
| React Hooks | useState, useCallback, useRef, useEffect |

---

## Package Structure

```
src/
├── components/
│   ├── Header.jsx           # Title and speed controls
│   ├── StatsBar.jsx         # Pass, Comparisons, Swaps, Big O
│   ├── Legend.jsx           # Color legend (Default/Comparing/Swapping/Sorted)
│   ├── BarsChart.jsx        # Animated bar chart visualization
│   ├── Controls.jsx         # Start and New Array buttons
│   └── OperationsLog.jsx    # Step-by-step operations sidebar
├── hooks/
│   └── useBubbleSort.js     # All sorting logic and state management
├── constants/
│   └── config.js            # Colors, speed settings, array configuration
├── utils/
│   └── arrayUtils.js        # generateArray and sleep utilities
├── App.jsx                  # Main component — composes all parts
└── main.jsx                 # Entry point
```

---

## Run Online (StackBlitz)

You can run this project directly in the browser without installing anything.

Go to **https://stackblitz.com**, create a new **React** project, and paste the following at the top of `App.js`:

```javascript
import React from 'react';
```

Then replace the contents of each file with the code from this repository following the package structure below.

---

## How to Run Locally

### Prerequisites
- Node.js v18 or higher
- npm

### Steps

1. Clone the repository:
```bash
git clone https://github.com/Simeon-Petrov/BubbleSortVisualizer.git
```

2. Navigate to the project folder:
```bash
cd BubbleSortVisualizer
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser at **http://localhost:5173**

---

## Architecture

The project follows **Separation of Concerns** — each file has a single responsibility:

- `useBubbleSort.js` — only handles sorting logic, state, and animation timing
- `BarsChart.jsx` — only handles the visual rendering of bars
- `OperationsLog.jsx` — only handles the log sidebar
- `config.js` — only stores constants (colors, speeds, array size)
- `arrayUtils.js` — only provides utility functions
- `App.jsx` — only composes components together

---

## Algorithm

Bubble Sort works by repeatedly comparing adjacent elements and swapping them if they are in the wrong order. After each pass, the largest unsorted element "bubbles up" to its correct position.

- **Best case:** O(n) — array is already sorted (early stop)
- **Average case:** O(n²)
- **Worst case:** O(n²) — array is sorted in reverse

---

## License

This project is open source and available for portfolio and educational use.

---

## Author

Simeon Petrov
