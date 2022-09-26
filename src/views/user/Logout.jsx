import { Navigate } from 'react-router-dom'

import { setCookie } from '../../util/cookie';
import { removeCookie } from '../../util/cookie';

function Logout() {
  // setCookie("token", "");
  removeCookie("token");

  return <Navigate to="/" replace />
}

export default Logout;
