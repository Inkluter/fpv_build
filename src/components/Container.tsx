import Box from '@mui/material/Box';

interface ContainerProps {
  children: React.ReactNode;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <Box
      sx={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: '0 20px',
      }}
    >
      {children}
    </Box>
  );
};
