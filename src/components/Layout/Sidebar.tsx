import { FC, useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

import DrawerHeader from 'components/common/DrawerHeader';
import { DRAWER_WITH, ADMIN_OPTIONS } from '../../constants';

interface SidebarProps {
  isOpen: boolean;
  onCloseDrawer: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onCloseDrawer }) => {
  const theme = useTheme();

  const [selectedItem, setSelectedItem] = useState<number>(0);

  const isItemSelected = (index: number) => index === selectedItem;

  return (
    <Drawer
      sx={{
        width: DRAWER_WITH,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: DRAWER_WITH,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
    >
      <DrawerHeader>
        <IconButton onClick={onCloseDrawer}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List component="nav">
        {ADMIN_OPTIONS.map((text, index) => (
          <ListItemButton
            key={text}
            onClick={() => setSelectedItem(index)}
            sx={{
              background: isItemSelected(index) ? theme.palette.secondary.main : null,
              color: isItemSelected(index) ? 'white' : null,
              ':hover': { background: isItemSelected(index) ? theme.palette.secondary.main : null },
            }}
          >
            <ListItemText primary={text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
