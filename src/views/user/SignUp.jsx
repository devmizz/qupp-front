import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useAuthContext } from "../../hooks/authContext";
import { signUp } from "../../util/axios";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const { setAuthToken } = useAuthContext();

  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const nicknameHandler = (e) => {
    e.preventDefault();
    setNickname(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let body = {
      email: email,
      password: password,
      nickname: nickname,
    };
    // result = signUp(body);

    apiCall(body);

    // setCookie("token", result.data.jwtToken);
  };

  async function apiCall(body) {
    const signUpData = await signUp(body);

    if (signUpData) {
      setAuthToken(signUpData.data.jwtToken);
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

      <Form.Group className="mb-3" controlId="formBasicNickname">
        <Form.Label>닉네임</Form.Label>
        <Form.Control
          type="nickname"
          value={nickname}
          onChange={nicknameHandler}
          placeholder="Enter nickname"
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        회원가입
      </Button>
    </Form>
  );
}

export default SignUp;
