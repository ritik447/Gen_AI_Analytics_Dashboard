# 🚀 Gen AI Analytics Dashboard  
*A React-Redux dashboard for natural language data queries with simulated AI interactions*  
![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)
![Redux](https://img.shields.io/badge/Redux-764ABC?logo=redux&logoColor=white)
![MUI](https://img.shields.io/badge/MUI-007FFF?logo=mui&logoColor=white)

[![Live Demo](https://img.shields.io/badge/Vercel-Live_Demo-black?style=for-the-badge&logo=vercel)]([https://gen-ai-dashboard.vercel.app](https://vercel.com/ritik-agrawals-projects-f87830c2/gen-ai-analytics-dashboard/4WmdZgDfUuESuBZGCBPW3ZH1rW3t))
[![GitHub Issues](https://img.shields.io/github/issues/ritik447/gen-ai-dashboard?style=for-the-badge)](https://github.com/ritik447/gen-ai-dashboard/issues)
[![License](https://img.shields.io/badge/license-MIT-blue?style=for-the-badge)](LICENSE)

---

## ✨ Key Features
- Natural language query processing (simulated AI)
- Real-time visualization with Chart.js
- Redux-powered state management
- Responsive Material-UI layout
- Error handling & loading states

---

## 🛠 Tech Stack
| Category       | Technologies                          |
|----------------|---------------------------------------|
| **Frontend**   | React, Vite, Redux Toolkit, MUI      |
| **Visualization** | Chart.js, React-Chartjs-2          |
| **Build**      | ESLint, Prettier, GitHub Actions      |

---

## 🏁 Getting Started

### Prerequisites
- Node.js ≥16
- npm ≥8

### Installation
```bash
git clone https://github.com/ritik447/gen-ai-dashboard.git
cd gen-ai-dashboard
npm install
src/
├── components/       # Reusable UI components
│   ├── QueryInput.jsx
│   ├── ChartVisualization.jsx
│   └── ...
├── store/            # Redux setup
│   ├── actions/
│   ├── reducers/
│   └── store.js
└── utils/            # Mock AI simulation
    ├── mockData.js
    └── simulateProcessing.js

🧠 Our Approach
1. Simulated AI Interaction
Built a mock API engine that:

Analyzes query context (e.g., detects "trend", "compare", or time periods)

Generates dynamic mock data using Chart.js

Introduces realistic latency (1.5–2.5s delays) and random errors (10% failure rate)

2. State Management
Redux Toolkit for centralized state:

Caches query history

Manages async "processing" states

Normalized data structure for scalability

3. Component Design
Modular Architecture:

QueryInput: Typeahead suggestions with debouncing

ResultsDisplay: Smart loading/error handling

Pure visualization components (Bar/Line charts)

4. UI/UX Philosophy
Inspired by Behance/Dribble dashboards:

Progressive disclosure of information

Skeleton loading states

Responsive grid (MUI Grid + Flexbox)

5. Evaluation-Centric
Testable Patterns:

Redux selectors with memoization

Isolated component stories (Storybook-ready)

TypeScript-ready props

Key Innovation

// utils/simulateProcessing.js
const generateSmartResponse = (query) => {
  // Context-aware mock data
  if (query.includes("sales")) return generateSalesData();
  if (query.includes("month")) return generateTimeSeries();
  return defaultDataset; 
};
