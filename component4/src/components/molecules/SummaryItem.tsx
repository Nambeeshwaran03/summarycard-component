import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

type SummaryItemProps = {
  label: string;
  value: string | number;
};

const SummaryItem = ({ label, value }: SummaryItemProps) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    sx={{ my: 1 }}
  >
    <Typography
      color="text.secondary"
      sx={{
        minWidth: '130px', // adjust this width based on actual spacing
        whiteSpace: 'nowrap',
      }}
    >
      {label}
    </Typography>
    <Typography
      color="text.primary"
      sx={{ textAlign: 'right', flexGrow: 1 }}
    >
      {value}
    </Typography>
  </Box>
);

export default SummaryItem;
