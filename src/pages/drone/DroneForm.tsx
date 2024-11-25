import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { SelectElement, SwitchElement } from 'react-hook-form-mui';
import { useWatch } from 'react-hook-form';

const MARGIN = 2;

const VTX_OPTIONS = [
  {
    label: '3.3 GHZ',
    id: '1',
  },
  {
    label: '5.8 GHZ',
    id: '2',
  },
  {
    label: '1.2 GHZ',
    id: '3',
  },
];

const RX_OPTIONS = [
  {
    label: '997 GHZ',
    id: '1',
  },
  {
    label: '465 GHZ',
    id: '2',
  },
];

const FRAME_OPTIONS = [
  {
    label: '7',
    id: '7',
  },
  {
    label: '8',
    id: '8',
  },
  {
    label: '9',
    id: '9',
  },
  {
    label: '10',
    id: '10',
  },
];

export const DroneForm = () => {
  const dualRx = useWatch({ name: 'dualRx' });
  const dualVtx = useWatch({ name: 'dualVtx' });

  return (
    <Paper
      elevation={3}
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        m: 2,
      }}
    >
      <Typography variant="h4">Build Your Drone</Typography>
      <Typography mt={MARGIN} variant="h6">
        Frame
      </Typography>
      <SelectElement
        fullWidth
        name="frameSize"
        label="Frame Size"
        options={FRAME_OPTIONS}
      />
      <Typography mt={MARGIN} variant="h6">
        ELRS
      </Typography>
      <SelectElement fullWidth name="rx_1" label="RX" options={RX_OPTIONS} />
      <SwitchElement name="dualRx" label="Dual RX" />
      {dualRx && (
        <SelectElement
          fullWidth
          name="rx_2"
          label="RX 2"
          options={RX_OPTIONS}
        />
      )}
      <Typography mt={MARGIN} variant="h6">
        Video Transmission
      </Typography>
      <SelectElement fullWidth name="vtx_1" label="VTX" options={VTX_OPTIONS} />
      <SwitchElement name="dualVtx" label="Dual VTX" />
      {dualVtx && (
        <SelectElement
          fullWidth
          name="vtx_2"
          label="VTX 2"
          options={VTX_OPTIONS}
        />
      )}
      <Box>
        <Button fullWidth variant="contained">
          Next
        </Button>
      </Box>
    </Paper>
  );
};
