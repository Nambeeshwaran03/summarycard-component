import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SummaryItem from './SummaryItem';

type PaybackInfoProps = {
  paybackAmount: string;
  rate: string;
};

const PaybackInfo = ({ paybackAmount, rate }: PaybackInfoProps) => (
  <Box>
    <SummaryItem label="Payback amount" value={paybackAmount} />
    <Box display="flex" justifyContent="space-between" alignItems="center" mt={1}>
      <Typography color="text.secondary">Rate %</Typography>
      <Typography>
        <Box component="span" color="text.secondary" mr={0.5}>
          (12.00%)
        </Box>
        <Box component="span" color="text.primary" >
          {rate}
        </Box>
      </Typography>
    </Box>
  </Box>
);

export default PaybackInfo;
