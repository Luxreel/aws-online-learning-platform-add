import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import { Divider } from '@mui/material';

export default function TemporaryDrawer({ signOut }) {
  const [state, setState] = React.useState({
    left: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {/* Item 1 */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary={'Home'} />
          </ListItemButton>
        </ListItem>
        {/* Item 2 */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <NotificationsActiveIcon />
            </ListItemIcon>
            <ListItemText primary={'Notifications'} />
          </ListItemButton>
        </ListItem>
        {/* Item 3 */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MenuBookIcon />
            </ListItemIcon>
            <ListItemText primary={'Course Catalog'} />
          </ListItemButton>
        </ListItem>
        {/* Item 4 */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <QuestionAnswerIcon />
            </ListItemIcon>
            <ListItemText primary={'Discussion Forums'} />
          </ListItemButton>
        </ListItem>
        {/* Item 5 */}
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PermContactCalendarIcon />
            </ListItemIcon>
            <ListItemText primary={'Contact'} />
          </ListItemButton>
        </ListItem>
        <Divider />
        {/* Sign out */}
        <ListItem disablePadding onClick={signOut}>
          <ListItemButton onClick={() => signOut}>
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText primary={'Sign out'} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton color="primary" aria-label="toggle drawer" onClick={toggleDrawer(anchor, true)}>
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}