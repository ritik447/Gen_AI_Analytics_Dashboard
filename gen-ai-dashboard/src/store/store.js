// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import queryReducer from './reducers/queryReducer';

export default configureStore({
  reducer: {
    query: queryReducer,
  },
});