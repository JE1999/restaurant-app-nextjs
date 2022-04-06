import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import BaseButton from 'components/common/BaseButton';
import BaseTextInput from 'components/common/BaseTextInput';
import SigupSigninCard from 'components/common/SignupSigninCard';
import { Formik, Form } from 'formik';
import Link from 'next/link';
import { ReactElement } from 'react';

const linkTextStyles = {
  color: '#309BFE',
  fontSize: '12px',
  textAlign: 'center',
  marginTop: '10px',
  cursor: 'pointer',
};

const dontHaveAccountText = {
  marginTop: '30px',
  fontWeight: 600,
  textTransform: 'uppercase',
  fontSize: '13px',
};

const Signin = () => {
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
                <BaseTextInput name="mail" label="Correo" />
                <BaseTextInput name="password" label="Contraseña" />
              </Form>
            </>
          )}
        </Formik>
        <BaseButton fullWidth>REGISTRARSE</BaseButton>
        <Typography sx={linkTextStyles}>OLVIDASTE TU CONTRASEÑA?</Typography>
        <Typography align="center" sx={dontHaveAccountText}>
          ¿Aún no tienes una cuenta?
        </Typography>
        <Link href="/signup" passHref>
          <Typography sx={linkTextStyles}>REGISTRATE</Typography>
        </Link>
      </Box>
    </SigupSigninCard>
  );
};

export default Signin;

Signin.getLayout = function getLayout(page: ReactElement) {
  return page;
};
