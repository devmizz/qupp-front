import { Navigate } from 'react-router-dom'

import { removeCookie } from '../../util/cookie';

function Logout() {
  removeCookie("token");

  localStorage.clear();

  return <Navigate to="/" replace />
}

export default Logout;
