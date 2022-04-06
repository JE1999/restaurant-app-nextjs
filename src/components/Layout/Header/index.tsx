import { FC, useState } from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Image from 'next/image';
import { DRAWER_WITH, LOGO_URL } from '../../../constants';
import Menu from './Menu';
import CartPreview from './CartPreview';
interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${DRAWER_WITH}px)`,
    marginLeft: `${DRAWER_WITH}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

interface HeaderProps {
  isOpen: boolean;
  onOpenDraw: () => void;
}

const Header: FC<HeaderProps> = (props) => {
  const { isOpen, onOpenDraw } = props;
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState<boolean>(false);

  return (
    <AppBar position="fixed" open={isOpen} sx={{ background: 'white' }}>
      <Toolbar>
        <Box display="flex" justifyContent="space-between" sx={{ width: '100%' }}>
          <Box display="flex" alignItems="center">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={onOpenDraw}
              edge="start"
              sx={{ mr: 2, ...(isOpen && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <Image src={LOGO_URL} width={123} height={50} alt="logo" />
          </Box>
          <AddShoppingCartIcon
            color="secondary"
            sx={{ margin: 'auto 5px auto auto', cursor: 'pointer' }}
            onClick={() => setIsCartPreviewOpen(true)}
          />
          <Menu />
        </Box>
      </Toolbar>
      <CartPreview isOpen={isCartPreviewOpen} onClose={() => setIsCartPreviewOpen(false)} />
    </AppBar>
  );
};

export default Header;
