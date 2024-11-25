import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';

import { DroneFormWrapper } from './DroneFormWrapper';

export const DronePage = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={6}>
          <Box
            sx={{
              background:
                'url(https://www-cdn.djiits.com/cms/uploads/0cb5db0ca2ba38c9fd446070616bf420.png) no-repeat center center',
              height: '100vh',
            }}
          />
        </Grid>
        <Grid size={6}>
          <DroneFormWrapper />
        </Grid>
      </Grid>
    </Box>
  );
};
