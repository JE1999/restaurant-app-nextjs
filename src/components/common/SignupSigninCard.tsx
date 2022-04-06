import { ReactNode, FC } from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { LOGO_URL } from '../../constants';

const Conatainer = styled(Box)({
  background: '#E5E5E5',
  width: '100vw',
  height: '100vh',
  position: 'absolute',
});

const StyledCard = styled(Box)({
  width: '800px',
  height: '400px',
  borderRadius: '10px',
  margin: '150px auto',
  background: 'white',
  padding: '20px 20px',
});

interface SignupSigninCardProps {
  children: ReactNode;
}

const SignupSigninCard: FC<SignupSigninCardProps> = ({ children }) => {
  return (
    <Conatainer>
      <StyledCard>
        <Box display="flex" flexDirection="row" alignItems="center" sx={{ height: '100%' }}>
          <Box pl={5} sx={{ width: '50%' }}>
            <Image src={LOGO_URL} alt="logo" width={233} height={146} layout="fixed" />
          </Box>
          <Divider orientation="vertical" sx={{ marginRight: '30px' }} />
          <Box sx={{ width: '50%', height: '100%' }} py={5}>
            {children}
          </Box>
        </Box>
      </StyledCard>
    </Conatainer>
  );
};

export default SignupSigninCard;
