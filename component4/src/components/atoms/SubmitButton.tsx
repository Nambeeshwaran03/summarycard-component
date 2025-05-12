import { Button } from '@mui/material';

type SubmitButtonProps = {
  onClick: () => void;
};

const SubmitButton = ({ onClick }: SubmitButtonProps) => {
  return (
    <Button
      variant="contained"
      color="primary"
      fullWidth
      onClick={onClick}
      sx={{
        mt: 3,
        borderRadius: 2,
        py: 1.5,
        textTransform: 'none',
        fontWeight: 'bold',
        color: 'white',
        backgroundColor: '#6C5DD3',
        '&:hover': {
          backgroundColor: '#5945c1',
        },
      }}
    >
      Submit Your Credit
    </Button>
  );
};

export default SubmitButton;
