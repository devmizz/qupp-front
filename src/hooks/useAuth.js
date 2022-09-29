import { useCallback, useEffect, useMemo, useState } from 'react';
import { TOKEN } from '../constants';
import { getCookie, removeCookie } from '../util/cookie';

const useAuth = () => {
  const [token, setToken] = useState('');
  const isAuthenticated = useMemo(() => Boolean(token), [token]);

  const logout = useCallback(() => {
    if (isAuthenticated) {
      removeCookie(TOKEN);
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const _token = getCookie(TOKEN);
    if (_token) {
      setToken(_token);
    }
  }, []);

  return {
    isAuthenticated,
    logout,
  };
};

export default useAuth;
