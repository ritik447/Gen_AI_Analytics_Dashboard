import { Alert, AlertTitle } from '@mui/material';

export default function ErrorState({ error }) {
  return (
    <Alert severity="error" sx={{ my: 2 }}>
      <AlertTitle>Error</AlertTitle>
      {error || 'Something went wrong with your query'}
    </Alert>
  );
}