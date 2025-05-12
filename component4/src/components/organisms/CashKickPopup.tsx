import { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  onClose: () => void;
}

const CashKickPopup = ({ onClose }: Props) => {
  const [cashKickName, setCashKickName] = useState('');

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        right: -420,
        width: 400,
        backgroundColor: '#262529',
        color: 'white',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        zIndex: 10,
      }}
    >
      {/* Header */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography variant="h6" fontWeight="bold">
            Name your cash kick
          </Typography>
          <Typography variant="body2" color="gray">
            Add a name to identify your cash kick
          </Typography>
        </Box>
        <IconButton onClick={onClose} sx={{ color: 'white' }}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Input */}
      <Box mt={3}>
        <Typography variant="body2" mb={1}>
          Cash kick name
        </Typography>
        <TextField
          fullWidth
          value={cashKickName}
          onChange={(e) => setCashKickName(e.target.value)}
          placeholder="Ex: marketing expenses"
          variant="outlined"
          sx={{
            '& .MuiOutlinedInput-root': {
              borderRadius: '10px',
              backgroundColor: '#413F4D',
              color: 'white',
              '& fieldset': {
                borderColor: 'transparent',
              },
              '&:hover fieldset': {
                borderColor: 'transparent',
              },
              '&.Mui-focused fieldset': {
                borderColor: 'transparent',
              },
            },
            '& input::placeholder': {
              color: '#B0B0B0',
              opacity: 1,
            },
          }}
          InputProps={{
            sx: {
              height: 50,
              px: 2,
            },
          }}
        />
      </Box>

      {/* Buttons */}
      <Box mt={4} display="flex" justifyContent="flex-end" gap={2}>
        <Button
          onClick={onClose}
          sx={{
            color: 'white',
            backgroundColor: '#2D2D30',
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#3A3A3D',
            },
          }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          disabled={!cashKickName.trim()}
          sx={{
            backgroundColor: '#6C5DD3',
            color: 'white',
            px: 3,
            py: 1,
            borderRadius: 2,
            textTransform: 'none',
            '&:hover': {
              backgroundColor: '#5B4EC7',
            },
            '&.Mui-disabled': {
              backgroundColor: '#6C5DD3',
              opacity: 0.4,
              color: '#fff',
            },
          }}
        >
          Create Cash Kick
        </Button>
      </Box>
    </Box>
  );
};

export default CashKickPopup;
