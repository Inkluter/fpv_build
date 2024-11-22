import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          padding: 8,
          border: '1px solid #ccc',
          borderRadius: 1,
        }}
      >
        <Typography variant="h3">Login MOGUR</Typography>
        <TextField fullWidth label="Login" variant="standard" />
        <TextField fullWidth label="Password" variant="standard" />
        <Button variant="contained">Login</Button>
      </Box>
    </Box>
  );
};
