import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type TotalPayoutProps = {
  amount: string;
};

const TotalPayout = ({ amount }: TotalPayoutProps) => (
  <Box mt={3} pt={2} borderTop={1} borderColor="grey.800">
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      px={1} // Adds horizontal padding
    >
      <Typography variant="h6" color="text.secondary" fontWeight={500}>
        Total Payout
      </Typography>
      <Typography variant="h6" color="text.primary" fontWeight="bold" pl={2}>
        {amount}
      </Typography>
    </Box>
  </Box>
);

export default TotalPayout;
