import { useSelector } from 'react-redux';
import { Paper, Typography, Box } from '@mui/material';
import ChartVisualization from './ChartVisualization';
import LoadingState from './LoadingState';
import ErrorState from './ErrorState';

export default function ResultsDisplay() {
  const { results, isLoading, error } = useSelector(state => state.query);

  if (isLoading) return <LoadingState />;
  if (error) return <ErrorState error={error} />;
  if (!results) return null;

  return (
    <Paper elevation={3} sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Analysis Results
      </Typography>
      <Box sx={{ height: 400 }}>
        <ChartVisualization data={results} />
      </Box>
    </Paper>
  );
}