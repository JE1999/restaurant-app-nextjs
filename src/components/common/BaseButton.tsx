import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

const BaseButton = styled(Button)(({ theme }) => ({
  height: '30px',
  backgroundColor: `${theme.palette.secondary.main}`,
  fontSize: '14px',
  boxShadow: 'none',
  color: 'white',
  fontWeight: 600,
  margin: '5px 0px',
  '&:hover': {
    backgroundColor: `${theme.palette.secondary.main}`,
    opacity: 0.8,
  },
  '&.MuiButton-root.Mui-disabled': {
    color: 'white',
    backgroundColor: '#999999',
  },
}));

export default BaseButton;
