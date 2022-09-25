import { Cookies } from 'react-cookie';
import { Navigate } from 'react-router-dom'
import { setCookie } from '../../util/cookie';

function Logout() {
  console.log("hihi");
  setCookie("token", "");
  return <Navigate to="/" />
}

export default Logout;
