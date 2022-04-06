import { FC, ReactNode } from 'react';
import { styled } from '@mui/material/styles';
import InputBase, { InputBaseProps } from '@mui/material/InputBase';
import { alpha, FormControl, Typography } from '@mui/material';
import { Field } from 'formik';
// import TextField from '@mui/material/TextField';
import InputLabel from './InputLabel';

export const StyledFormControl = styled(FormControl)({
  width: '100%',
  marginBottom: '20px',
});

const errorTextStyles = {
  color: '#c00',
  fontWeight: 700,
  fontSize: '14px',
  marginTop: '5px',
};

const InvalidText = ({ children }: { children: ReactNode }) => (
  <Typography sx={errorTextStyles}>{children}</Typography>
);

const StyledTextInput = styled((props: InputBaseProps) => <InputBase {...props} />)(
  ({ theme }) => ({
    border: '1px solid #ced4da',
    '& .MuiInputBase-input': {
      height: '10px',
      fontSize: 16,
      padding: '10px 12px',
      transition: theme.transitions.create(['border-color', 'background-color', 'box-shadow']),
      '&:focus': {
        boxShadow: `inset 0 1px 1px ${alpha(theme.palette.primary.main, 0.08)}, 0 0 8px ${alpha(
          theme.palette.secondary.main,
          0.6,
        )}`,
        borderColor: alpha(theme.palette.secondary.main, 0.6),
      },
    },
    '&.Mui-error': {
      border: '1px solid red',
    },
  }),
);

interface TextInputProps extends InputBaseProps {
  isFormik?: boolean;
  label?: string;
}

const BaseTextInput: FC<TextInputProps> = (props) => {
  const { isFormik = true, name, label, ...rest } = props;

  return (
    <StyledFormControl>
      <InputLabel htmlFor={name}>{label}</InputLabel>
      {isFormik ? (
        <Field name={name}>
          {({ field, meta }) => (
            <>
              <StyledTextInput {...field} {...rest} error={Boolean(meta.error && meta.touched)} />
              {meta.error && meta.touched && <InvalidText>* {meta.error}</InvalidText>}
            </>
          )}
        </Field>
      ) : (
        <StyledTextInput {...rest} />
      )}
    </StyledFormControl>
  );
};

export default BaseTextInput;
