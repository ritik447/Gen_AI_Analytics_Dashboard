// src/utils/mockData.js
export const generateMockData = (query) => {
    const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
    return {
      labels,
      datasets: [{
        label: `Results for "${query}"`,
        data: labels.map(() => Math.floor(Math.random() * 1000)),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      }],
    };
  };