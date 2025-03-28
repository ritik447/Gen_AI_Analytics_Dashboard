import { simulateProcessing } from '../../utils/simulateProcessing';

// Action creators
export const setQuery = (query) => ({
  type: 'SET_QUERY',
  payload: query
});

export const submitQuery = (query) => async (dispatch) => {
  dispatch({ type: 'SET_LOADING' });
  dispatch({ type: 'ADD_TO_HISTORY', payload: query });
  
  try {
    const results = await simulateProcessing(query);
    dispatch({ type: 'SET_RESULTS', payload: results });
  } catch (error) {
    dispatch({ type: 'SET_ERROR', payload: error.message });
  }
};

export const fetchSuggestions = (query) => async (dispatch) => {
  if (query.length < 3) {
    dispatch({ type: 'SET_SUGGESTIONS', payload: [] });
    return;
  }
  
  // Mock AI suggestions
  const mockSuggestions = [
    `${query} by month`,
    `${query} by category`,
    `Compare ${query} with previous year`,
    `Show trend for ${query}`
  ];
  
  dispatch({ type: 'SET_SUGGESTIONS', payload: mockSuggestions });
};