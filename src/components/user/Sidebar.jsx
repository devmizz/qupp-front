import React, { useState } from 'react';

import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import ContentCut from '@mui/icons-material/ContentCut';
import ContentCopy from '@mui/icons-material/ContentCopy';
import ContentPaste from '@mui/icons-material/ContentPaste';
import Cloud from '@mui/icons-material/Cloud';

const menus = [
  {
    id: 'info',
    text: '내정보',
  },
  {
    id: 'question',
    text: '질문글',
  },
  {
    id: 'answer',
    text: '답글',
  },
  {
    id: 'comment',
    text: '댓글',
  },
];

const Sidebar = ({ onClickMenu }) => {
  const [selectedMenu, setMenu] = useState();

  const onClick = (id) => {
    setMenu(id);
    onClickMenu(id);
  };

  return (
    <div id="mypage-sidebar" className="h-full">
      <Paper elevation={0} sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          {menus.map((menu) => (
            <MenuItem
              autoFocus
              selected={menu.id === selectedMenu}
              onClick={() => onClick(menu.id)}
            >
              <ListItemText key={menu.id}>{menu.text}</ListItemText>
            </MenuItem>
          ))}
        </MenuList>
      </Paper>
    </div>
  );
};

export default Sidebar;
