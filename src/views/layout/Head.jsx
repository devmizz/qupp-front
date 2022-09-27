import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../hooks/authContext";

function Head() {
  const { isAuthenticated, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">QUPP</Navbar.Brand>
        <Nav>
          <Nav.Link href="/question">질문하기</Nav.Link>
        </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            {isAuthenticated ? (
              <>
                <Nav.Link href="/mypage">마이페이지</Nav.Link>
                {/* <Nav.Link href="/logout">로그아웃</Nav.Link> */}
                <button onClick={handleLogout} style={{ color: "white" }}>
                  로그아웃
                </button>
              </>
            ) : (
              <>
                <Nav.Link href="/login">로그인</Nav.Link>
                <Nav.Link href="/create_account">회원가입</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Head;
