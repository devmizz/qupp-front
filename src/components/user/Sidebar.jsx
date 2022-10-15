import React, { useState } from 'react';

import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';

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
  const [selectedMenu, setMenu] = useState('info');

  const onClick = (id) => {
    setMenu(id);
    onClickMenu(id);
  };

  return (
    <div id="mypage-sidebar" className="h-full">
      <Paper elevation={0} sx={{ width: 320, maxWidth: '100%' }}>
        <MenuList>
          {menus.map((menu, index) => (
            <MenuItem
              key={index}
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
