import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function SignUp() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>이메일</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>비밀번호</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>닉네임</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Button variant="primary" type="submit">
        회원가입
      </Button>
    </Form>
  );
}

export default SignUp;
