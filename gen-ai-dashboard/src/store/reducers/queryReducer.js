// src/store/queryReducer.js
const initialState = {
    currentQuery: '',
    queryHistory: [],
    results: null,
    isLoading: false,
    error: null,
    suggestions: [],
  };
  
  export default function queryReducer(state = initialState, action) {
    switch (action.type) {
      case 'SET_QUERY':
        return { ...state, currentQuery: action.payload };
      case 'ADD_TO_HISTORY':
        return { ...state, queryHistory: [action.payload, ...state.queryHistory] };
      case 'SET_RESULTS':
        return { ...state, results: action.payload, isLoading: false };
      case 'SET_LOADING':
        return { ...state, isLoading: true, error: null };
      case 'SET_ERROR':
        return { ...state, error: action.payload, isLoading: false };
      case 'SET_SUGGESTIONS':
        return { ...state, suggestions: action.payload };
      default:
        return state;
    }
  }