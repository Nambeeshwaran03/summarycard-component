import { Box, Typography,Paper } from '@mui/material';
import { useState } from 'react';
import SummaryItem from '../molecules/SummaryItem';
import PaybackInfo from '../molecules/PaybackInfo';
import TotalPayout from '../molecules/TotalPayout';
import SubmitButton from '../atoms/SubmitButton';
import CashKickPopup from './CashKickPopup';


const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(amount);
};

const SummaryCard = () => {
  const [showPopup, setShowPopup] = useState(false);

  const totalPayoutFormatted = formatCurrency(150000);
  const paybackAmountFormatted = formatCurrency(170454.55);
  const rateFormatted = formatCurrency(20454.55);

  return (
    <Box sx={{ position: 'relative', display: 'flex' }}>
      <Paper
        sx={{
          p: 3,
        
          backgroundColor: 'background.paper',
        }}
      >
         <Box display="flex" alignItems="center" gap={1}>
           <Typography variant="h6" gutterBottom sx={{ m: 0 }}>
            Summary
          </Typography>
          <img src="/assets/svgs/info-circle.svg" alt="Info" width={18} height={18} />
          </Box>   
        

        <Box mt={2}>
          <SummaryItem label="Term" value="12 months" />
          <SummaryItem label="Selected contracts" value="2" />
          <PaybackInfo paybackAmount={paybackAmountFormatted} rate={rateFormatted} />
        </Box>

       
        <TotalPayout amount={totalPayoutFormatted} />
        <SubmitButton onClick={() => setShowPopup(true)} />
      </Paper>

      {showPopup && <CashKickPopup onClose={() => setShowPopup(false)} />}
    </Box>
  );
};

export default SummaryCard;
