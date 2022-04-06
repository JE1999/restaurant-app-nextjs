import MuiInputLabel, { InputLabelProps } from '@mui/material/InputLabel';
import { styled } from '@mui/material/styles';

const InputLabel = styled((props: InputLabelProps) => <MuiInputLabel shrink {...props} />)(
  ({ theme }) => ({
    color: '#666666',
    fontSize: 14,
    fontWeight: 'bold',
    transform: 'unset',
    position: 'unset',
  }),
);

export default InputLabel;
