import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AddIcon from '@mui/icons-material/Add';
import HorizontalRuleIcon from '@mui/icons-material/HorizontalRule';
import { useState, FC } from 'react';

const incrementDecrementStyles = {
  width: '20px',
  height: '20px',
  background: '#E2E2E2',
  borderRadius: '50%',
  fontSize: '15px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
};

interface IncrementDecrementProps {
  onCountChange: (count: number) => void;
}

const IncrementDecrement: FC<IncrementDecrementProps> = ({ onCountChange }) => {
  const [count, setCount] = useState<number>(1);

  const handleChangeCount = (count: number) => {
    if (count >= 1 && count <= 20) {
      onCountChange(count);
      setCount(count);
    }
  };

  return (
    <Box display="flex">
      <Box sx={incrementDecrementStyles}>
        <HorizontalRuleIcon onClick={() => handleChangeCount(count - 1)} fontSize="inherit" />
      </Box>
      <Typography sx={{ fontSize: '13px', margin: '0px 9px 2px 9px' }}>{count}</Typography>
      <Box sx={incrementDecrementStyles}>
        <AddIcon onClick={() => handleChangeCount(count + 1)} fontSize="inherit" />
      </Box>
    </Box>
  );
};

export default IncrementDecrement;
