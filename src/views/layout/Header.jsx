import React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { removeCookie } from '../../util/cookie';
import { RESET } from '../../constants/types';

export default function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);

  const onLoginClick = () => {
    navigate(`/login`);
  };

  const onSignUpClick = () => {
    navigate(`/create_account`);
  };

  const onMyPageClick = () => {
    navigate(`/my_page`);
  };

  const onLogoutClick = () => {
    removeCookie('token');

    localStorage.removeItem('user');

    dispatch({
      type: RESET,
    });

    navigate(`/login`);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            QUPP
          </Typography>
          {user.id === -1 ? (
            <>
              <Button color="inherit" onClick={() => onLoginClick()}>
                로그인
              </Button>
              <Button color="inherit" onClick={() => onSignUpClick()}>
                회원가입
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" onClick={() => onMyPageClick()}>
                마이페이지
              </Button>
              <Button color="inherit" onClick={() => onLogoutClick()}>
                로그아웃
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
