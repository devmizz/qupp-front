import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { login } from "../../util/axios";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useAuthContext } from "../../hooks/authContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setAuthToken } = useAuthContext();

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
      email: email,
      password: password,
    };
    // result = signUp(body);

    apiCall(body);
  };

  async function apiCall(body) {
    const loginData = await login(body);

    if (loginData) {
      setAuthToken(loginData.data.jwtToken);
      navigate("/");
    }
  }

  return (
    <Form onSubmit={submitHandler}>
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
  );
}

export default Login;
