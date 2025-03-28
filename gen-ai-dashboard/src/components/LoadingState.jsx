import { Box, CircularProgress, Typography } from '@mui/material';

export default function LoadingState() {
  return (
    <Box 
      display="flex" 
      flexDirection="column" 
      alignItems="center" 
      justifyContent="center" 
      p={4}
      height={300}
    >
      <CircularProgress size={60} thickness={4} />
      <Typography variant="h6" mt={3}>
        Processing your query...
      </Typography>
    </Box>
  );
}