import { Navigate } from 'react-router-dom';

import { removeCookie } from '../../util/cookie';

function Logout() {
  removeCookie('token');

  localStorage.removeItem('userId');
  localStorage.removeItem('userEmail');
  localStorage.removeItem('userNickname');

  return <Navigate to="/" replace />;
}

export default Logout;
