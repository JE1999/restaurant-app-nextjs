import { FC, ReactNode, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import dynamic from 'next/dist/shared/lib/dynamic';
import DrawerHeader from 'components/common/DrawerHeader';
import Header from './Header';

const Sidebar = dynamic(() => import('./Sidebar'), { ssr: false });

import { DRAWER_WITH } from '../../constants';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${DRAWER_WITH}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Header isOpen={open} onOpenDraw={handleDrawerOpen} />
      <Sidebar isOpen={open} onCloseDrawer={handleDrawerClose} />
      <Main open={open} sx={{ background: `${theme.palette.primary.main}`, height: '100%' }}>
        <DrawerHeader />
        {children}
      </Main>
    </Box>
  );
};

export default Layout;
