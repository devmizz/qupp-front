import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { login } from '../../util/axios/user/loginApi';
import { setCookie } from '../../util/cookie';
import { SET } from '../../constants/types';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      email,
      password,
    };

    apiCall(body);
  };

  async function apiCall(body) {
    const loginData = await login(body);

    if (loginData) {
      const user = loginData.data.responseUser;

      const data = {
        id: user.id,
        email: user.email,
        nickname: user.nickname,
      };

      localStorage.setItem('user', JSON.stringify(data));

      dispatch({
        type: SET,
        payload: data,
      });

      setCookie('token', loginData.data.jwtToken);

      navigate(`/`);
    }
  }

  return (
    <div className="flex justify-center mt-3 container">
      <Form
        className="flex flex-col w-4/12 justify-center align-middle"
        onSubmit={submitHandler}
      >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={emailHandler}
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={passwordHandler}
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          로그인
        </Button>
      </Form>
    </div>
  );
}

export default Login;
