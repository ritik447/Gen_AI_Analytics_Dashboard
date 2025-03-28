import { useSelector } from 'react-redux';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';

export default function QueryHistory() {
  const { queryHistory } = useSelector(state => state.query);

  if (!queryHistory.length) return null;

  return (
    <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Queries
      </Typography>
      <List>
        {queryHistory.map((query, i) => (
          <ListItem key={i}>
            <ListItemText primary={query} />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
}