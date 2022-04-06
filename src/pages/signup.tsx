import { ReactElement } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BaseButton from 'components/common/BaseButton';
import BaseTextInput from 'components/common/BaseTextInput';
import SigupSigninCard from 'components/common/SignupSigninCard';
import { Formik, Form } from 'formik';

const Signup = () => {
  const handleFormSubmit = () => {};

  return (
    <SigupSigninCard>
      <Box>
        <Typography align="center" fontWeight="bold" variant="h4" sx={{ marginBottom: '20px' }}>
          REGISTRATE!
        </Typography>
        <Formik
          initialValues={{}}
          onSubmit={handleFormSubmit}
          // validationSchema={validationSchema}
        >
          {(formik) => (
            <>
              <Form onSubmit={formik.handleSubmit}>
                <BaseTextInput name="name" label="Nombre completo" />
                <BaseTextInput name="phone" label="Telefono" />
                <BaseTextInput name="mail" label="Correo" />
                <BaseTextInput name="password" label="Contraseña" />
              </Form>
            </>
          )}
        </Formik>
        <BaseButton fullWidth>REGISTRARSE</BaseButton>
      </Box>
    </SigupSigninCard>
  );
};

export default Signup;

Signup.getLayout = function getLayout(page: ReactElement) {
  return page;
};
