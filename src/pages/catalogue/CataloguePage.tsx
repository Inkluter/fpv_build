import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { Container } from '../../components/Container';

const DRONES_MOCK = [
  {
    id: '1',
    type: 'kamikaze',
    size: '7',
    price: '14000',
    name: 'Kamik',
  },
  {
    id: '2',
    type: 'bomber',
    size: '7',
    price: '160500',
    name: 'Megabomber',
  },
  {
    id: '3',
    type: 'bomber',
    size: '9',
    price: '16500',
    name: 'Bog bomber',
  },
  {
    id: '4',
    type: 'kamikaze',
    size: '9',
    price: '16500',
    name: 'Big Kami',
  },
];

export const CataloguePage = () => {
  return (
    <Container>
      <Box
        sx={{
          padding: 2,
          paddingTop: 4,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '1rem',
          }}
        >
          <Typography variant="h4" mr={2}>
            My Drones
          </Typography>
          <Button variant="contained">New</Button>
        </Box>
        <TableContainer sx={{ marginTop: 2 }} component={Paper} elevation={5}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Size</TableCell>
                <TableCell>Price</TableCell>
                <TableCell
                  sx={{
                    textAlign: 'center',
                  }}
                >
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DRONES_MOCK.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.size}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell
                    sx={{
                      textAlign: 'center',
                    }}
                  >
                    <Button>Edit</Button>
                    <Button>Delete</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Container>
  );
};
