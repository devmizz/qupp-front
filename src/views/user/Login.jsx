import { useState } from "react";
import { useNavigate } from 'react-router-dom'

import { login } from "../../util/axios"
import { setCookie } from "../../util/cookie"

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  }

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    
    let body = {
      email: email,
      password: password,
    };

    apiCall(body);
  }

  async function apiCall(body) {
    const loginData = await login(body);
    let token = "";

    if(loginData) {
      token = loginData.data.jwtToken;

      let user = loginData.data.responseUser;

      localStorage.setItem('userId', user.id);
      localStorage.setItem('userEmail', JSON.stringify(user.email));
      localStorage.setItem('userNickname', JSON.stringify(user.nickname));

      setCookie("token", token);
      navigate('/')
      // 이건 야매임! 새로고침을 해서 강제로 cookie를 읽게 만들어서 자연스러운 flow 형성
      // 전역 상태 관리 달아서 useAuth에 있는 token 값을 update 해주면 자연스럽게 해당 부분 없어도 동작할것임
      // window.location.reload()
    }

    return token;
  }

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" value={email} onChange={emailHandler} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" value={password} onChange={passwordHandler}  placeholder="Password" />
      </Form.Group>

      <Button variant="primary" type="submit">
        로그인
      </Button>
    </Form>
  );
}

export default Login;
