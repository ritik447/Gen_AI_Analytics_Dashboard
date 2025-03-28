// src/utils/simulateProcessing.js
import { generateMockData } from './mockData';

export const simulateProcessing = (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(generateMockData(query));
    }, 1500); // Simulate 1.5s delay
  });
};