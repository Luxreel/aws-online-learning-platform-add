import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

export default function MenuPopupState({ navigate, user, signOut }) {
  function stringToColor(string) {
    let hash = 0;
    let i;
  
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
        width: 35,
        height: 35,
      },
      children: `${name.split('.')[0][0].toUpperCase()}${name.split('.')[1][0].toUpperCase()}`,
    };
  }

  const handleProfileClick = (popupState) => {
    popupState.close()
    navigate('/profile')
 }

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <div
            {...bindTrigger(popupState)}
            style={{ cursor: 'pointer' }}>
            <Avatar {...stringAvatar(user.username)}/>
          </div>  
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => handleProfileClick(popupState)}>Profile</MenuItem>
            <MenuItem onClick={popupState.close}>My account</MenuItem>
            <MenuItem onClick={() => signOut()}>👋 Sign out</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
}