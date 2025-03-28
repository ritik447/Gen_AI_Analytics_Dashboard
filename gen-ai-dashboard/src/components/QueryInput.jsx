import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TextField, Button, List, ListItem, ListItemText, Paper, Typography } from '@mui/material';
import { submitQuery, fetchSuggestions } from '../store/actions/queryActions';
// Note the added '/actions' in the path

export default function QueryInput() {
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();
  const { suggestions } = useSelector(state => state.query);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (query.length >= 3) {
        dispatch(fetchSuggestions(query));
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [query, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      dispatch(submitQuery(query));
    }
  };

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Ask About Your Data
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          label="Example: 'Show sales by month'"
          variant="outlined"
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Analyze
        </Button>
      </form>
      
      {suggestions.length > 0 && (
        <List sx={{ mt: 2 }}>
          {suggestions.map((suggestion, i) => (
            <ListItem 
              key={i} 
              button 
              onClick={() => {
                setQuery(suggestion);
                dispatch(submitQuery(suggestion));
              }}
            >
              <ListItemText primary={suggestion} />
            </ListItem>
          ))}
        </List>
      )}
    </Paper>
  );
}