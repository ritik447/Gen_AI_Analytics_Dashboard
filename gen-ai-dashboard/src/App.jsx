import { Provider } from 'react-redux';
import { CssBaseline, Container, Box, Typography } from '@mui/material';
import store from './store/store';
import QueryInput from './components/QueryInput';
import QueryHistory from './components/QueryHistory';
import ResultsDisplay from './components/ResultsDisplay';

function App() {
  return (
    <Provider store={store}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom 
            sx={{ 
              fontWeight: 'bold',
              background: 'linear-gradient(45deg, #1976d2 30%, #4dabf5 90%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textAlign: 'center'
            }}
          >
            Gen AI Analytics Dashboard
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary" 
            textAlign="center"
            sx={{ mb: 3 }}
          >
            Ask natural language questions about your data
          </Typography>
        </Box>

        <QueryInput />
        <QueryHistory />
        <ResultsDisplay />
      </Container>
    </Provider>
  );
}

export default App;