import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { removeCookie } from '../../util/cookie';
import { RESET } from '../../constants/types';
import { useEffect } from 'react';

function Logout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  removeCookie('token');

  localStorage.removeItem('user');

  dispatch({
    type: RESET,
  });

  return navigate(`/login`);
}

export default Logout;
